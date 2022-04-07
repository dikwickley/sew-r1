import { useRouter } from "next/router";

export default function ({ movie, msg }) {
  return (
    <p>
      movie {movie} {msg}
    </p>
  );
}

export async function getServerSideProps(context) {
  const { movie } = context.query;

  //fetch movie data

  return {
    props: {
      movie: movie,
      msg: "hello",
    }, // will be passed to the page component as props
  };
}
