import axios from "axios";
import { useState } from "react";
import { Layout } from "../components/Layout";
import Link from "next/link";

const ThumbNail = ({ img, name, id }) => {
  return (
    <div className="flex flex-col items-center justify-center font-sans text-lg leading-snug text-center font-semibold  w-[170px] m-5 self-start">
      <Link href={`/movie/${id}`}>
        <img
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

export default function Home() {
  const [search, setSearch] = useState("dog");
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${"7c8aaaa8252e8127b6b1c93b1f2c9183"}&query=${search}`
      )
      .then((data) => {
        setLoading(false);
        return data.data;
      })
      .catch((error) => {
        console.log(error);
        setMovies(false);
        setLoading(false);
      });

    console.log(data);
    setMovies(data.results);
  };

  return (
    <Layout title={"Home"}>
      <div className="relative flex flex-col font-mono text-2xl  text-white bg-gradient-to-br from-pink-400 via-red-500  to-red-900  min-h-[100vh]  items-center">
        <div className="mt-20 mb-6 font-extrabold text-green-400 text-9xl ">
          movie hub 🎥
        </div>
        <div className="mt-20 mb-6 text-2xl">Search for any movie</div>
        <div className="flex flex-row items-center mb-10 ">
          <input
            type="text"
            className="text-black w-[400px] outline-none border-none px-4 py-2 font-mono text-4xl mr-2 h-[50px]"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className="h-[50px] bg-green-500 w-[100px]  text-4xl font-extrabold flex justify-center items-center"
            onClick={() => {
              handleSearch();
            }}
          >
            Go
          </button>
        </div>
        {movies !== null && loading !== true && (
          <div className="w-[80%] flex flex-row flex-wrap justify-center mb-28 mt-10">
            {movies.map((item, index) => {
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
        )}
        {loading && <div>LOADING</div>}
      </div>
    </Layout>
  );
}
