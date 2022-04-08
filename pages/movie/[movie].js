import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Layout } from "../../components/Layout";
import Link from "next/link";
import Image from "next/image";

const InfoBox = ({ info, data }) => {
  return (
    <div className="w-[250px]  h-[100px] flex flex-col items-center p-4 text-center">
      <span className="text-3xl font-thin">{info} </span>
      <span className="text-lg font-semibold">{data}</span>
    </div>
  );
};

const ThumbNail = ({ img, name, id }) => {
  return (
    <div className="flex flex-col items-center justify-center font-sans text-lg leading-snug text-center font-semibold  w-[170px] m-5 self-start">
      <Link href={`/movie/${id}`}>
        <Image
          width={170}
          height={250}
          alt="img"
          className="w-[100%] cursor-pointer"
          src={`http://image.tmdb.org/t/p/w500${img}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = "/error.jpeg";
          }}
        />
      </Link>
      <div>{name}</div>
    </div>
  );
};

export default function ({ movie, data, similarMovies }) {
  useState(() => {
    console.log(data);
  }, []);
  return (
    <Layout title={data.title}>
      <div className="w-[90%] flex flex-col justify-center  mx-auto text-white">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-row p-20 ">
            <Image
              width={800}
              height={600}
              alt="img"
              src={`http://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              className=" w-[800px]"
            />
            <div className="mx-4 text-6xl font-thin w-[50%]">
              {data.title} | {new Date(data.release_date).getFullYear()}
              <div className="text-base">{data.tagline}</div>
              <div className="text-2xl">{data.overview}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end p-20">
          <div className="flex flex-row flex-wrap w-[60%] justify-end text-white">
            <InfoBox
              info={"Country"}
              data={data.production_countries[0].name}
            />
            <InfoBox
              info={"Release Date"}
              data={new Date(data.release_date).toDateString()}
            />
            <InfoBox info={"Revenue"} data={`$${data.revenue}`} />
            <InfoBox info={"Language"} data={data.spoken_languages[0].name} />
            <InfoBox info={"Popularity"} data={data.popularity} />

            <InfoBox info={"Runtime"} data={`${data.runtime} mins`} />
            <InfoBox info={"Status"} data={data.status} />
            <InfoBox info={"18+"} data={data.adult ? "Yes" : "No"} />
            <InfoBox info={"Votes"} data={data.vote_count} />
          </div>
          <div>
            <Image
              width={340}
              height={500}
              alt="img"
              src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
              className=" w-[300px] self-end"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center mb-48">
          <div className="font-sans text-4xl">Production Companies</div>
          {data.production_companies.map((item, index) => {
            return (
              <div key={index} className="font-thin text-3xl w-[200px] m-10">
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="font-sans text-4xl text-center">Similar Movies</div>
        <div className="w-[80%] mx-auto flex flex-row flex-wrap justify-center mb-28 mt-10">
          {similarMovies.slice(0, 5).map((item, index) => {
            return (
              <ThumbNail
                key={index}
                name={item.title}
                img={item.poster_path}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { movie } = context.query;

  //fetch movie data
  const data = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie}?api_key=7c8aaaa8252e8127b6b1c93b1f2c9183`
    )
    .then((data) => data)
    .catch((error) => console.log(error));

  const similarMovies = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movie}/similar?api_key=7c8aaaa8252e8127b6b1c93b1f2c9183`
    )
    .then((data) => data)
    .catch((error) => console.log(error));

  if (data === undefined) return null;
  // console.log(similarMovies.data);

  return {
    props: {
      movie: movie,
      data: data.data,
      similarMovies: similarMovies.data.results,
    }, // will be passed to the page component as props
  };
}
