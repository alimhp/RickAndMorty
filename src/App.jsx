import "./App.css";

import CharList from "./Component/CharList";
import Navbar from "./Component/Navbar";
import { allCharacters, character,episodes } from "../data/data";
import CharMain from "./Component/CharMain";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="mid">
        <CharList allCharacters={allCharacters} />
        <CharMain character={character} episodes={episodes} />
      </div>
    </div>
  );
}

export default App;
