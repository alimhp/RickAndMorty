import "./App.css";

import CharList from "./Component/CharList";
import Navbar from "./Component/Navbar";
import { allCharacters, character, episodes } from "../data/data";
import CharMain from "./Component/CharMain";
import { useState } from "react";
function App() {
  const [characters, setCharacters] = useState(allCharacters);

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
