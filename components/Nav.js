export const Nav = () => {
  return (
    <nav className="navbar flex justify-between items-center">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Seasons</a>
        </li>
        <li>
          <a href="#">Series</a>
        </li>
        <li>
          <a href="#"> Movies</a>
        </li>
      </ul>
      <div className="search">
        <input
          className="w-[500px]"
          type="text"
          name="search"
          id="search"
          placeholder="search this Website"
        />
      </div>
    </nav>
  );
};
