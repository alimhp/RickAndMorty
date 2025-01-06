import { HeartIcon } from "@heroicons/react/24/solid";
const Navbar = ({ numofchar, query, setQuery }) => {
  return (
    <>
      <div className="logo">LOGO</div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="search"
        placeholder="Search..."
      />
      <div className="char">Found {numofchar} character</div>
      <button className="heart_btn">
        <HeartIcon className="size-6 text-blue-500" />
        <span className="num">2</span>
      </button>
    </>
  );
};

export default Navbar;
