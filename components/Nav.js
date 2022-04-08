import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import axios from "axios";
export const Nav = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (search === "") {
      alert("Choose a movie");
    }
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
    <nav className="flex items-center justify-between navbar">
      <ul className="flex items-center justify-center text-xl">
        <li className="p-3 text-xl bg-white rounded-full cursor-pointer">
          <a href="/" className="hover:font-extrabold">
            🎥
          </a>
        </li>
        <li>
          <a href="/" className="hover:font-extrabold">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="hover:font-extrabold">
            About
          </a>
        </li>
      </ul>
      <div className="flex flex-row hidden search">
        <input
          type="text"
          className="text-black w-[400px] outline-none border-none px-4 py-2 font-mono text-2xl mr-2 h-[35px]"
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
          className="h-[35px] bg-green-500 w-[100px]  text-2xl font-extrabold flex justify-center items-center"
          onClick={() => {
            handleSearch();
          }}
        >
          Go
        </button>
      </div>
    </nav>
  );
};
