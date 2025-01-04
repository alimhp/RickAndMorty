import "./App.css";
import CharList from "./Component/CharList";
import Navbar from "./Component/Navbar";
import { character, episodes } from "../data/data";
import CharMain from "./Component/CharMain";
import { useEffect, useState } from "react";
import Loading from "./Component/Loading";
function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  // useEffect(() => {
  //   setIsloading(true);
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((data) => setCharacters(data.results.slice(0, 5)));
  //   setIsloading(false);
  // }, []);
  /////////////////////////////////////////////
  useEffect(() => {
    async function fetchdata() {
      try {
        setIsloading(true);
        const data = await fetch("https://rickandmortyapi.com/api/character");
        const res = await data.json();
        setCharacters(res.results.slice(0, 5));
        setIsloading(false);
      } catch {
        console.log(res.err);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className="app">
      <div className="navbar">
        <Navbar numofchar={characters.length} />
      </div>
      <div className="mid">
        {isLoading ? <Loading /> : <CharList characters={characters} />}
        <CharMain character={character} episodes={episodes} />
      </div>
    </div>
  );
}

export default App;
