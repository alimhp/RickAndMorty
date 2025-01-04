import "./App.css";
import CharList from "./Component/CharList";
import Navbar from "./Component/Navbar";
import { allCharacters, character, episodes } from "../data/data";
import CharMain from "./Component/CharMain";
import { useEffect, useState } from "react";
function App() {
  const [characters, setCharacters] = useState([]);
  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((data) => setCharacters(data.results.slice(0,5)));
  // }, []);
  useEffect(() => {
    async function fetchdata() {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      const res = await data.json();
      setCharacters(res.results);
    }
    fetchdata();
  }, []);

  return (
    <div className="app">
      <div className="navbar">
        <Navbar numofchar={characters.length} />
      </div>
      <div className="mid">
        <CharList characters={characters} />
        <CharMain character={character} episodes={episodes} />
      </div>
    </div>
  );
}

export default App;
