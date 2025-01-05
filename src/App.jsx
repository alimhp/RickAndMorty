import "./App.css";
import CharList from "./Component/CharList";
import Navbar from "./Component/Navbar";
import { character, episodes } from "../data/data";
import CharMain from "./Component/CharMain";
import { useEffect, useState } from "react";
import Loading from "./Component/Loading";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(false);




  ///////////////////////fetch////////////////////////
  // useEffect(() => {
  //   setIsloading(true);
  //   fetch("https://rickandmortyapi.com/api/character")
  //     .then((res) => res.json())
  //     .then((data) => setCharacters(data.results.slice(0, 5)))
  //     .catch((err) => toast.error(err.message));
  //   setIsloading(false);
  // }, []);

  ////////////////////fetch+async await/////////////////////////
  // useEffect(() => {
  //   async function fetchdata() {
  //     try {
  //       setIsloading(true);
  //       const res = await fetch("https://rickandmortyapi.com/api/character");
  //       if (!res.ok) throw new Error("something went wrong!");
  //       const data = await res.json();
  //       setCharacters(data.results.slice(0, 5));
  //     } catch (err) {
  //       console.log(err.message);
  //       toast.error(err.message);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }
  //   fetchdata();
  // }, []);
  //////////////////////////////////////////////////
  return (
    <div className="app">
      <div className="navbar">
        <Navbar numofchar={characters.length} />
      </div>
      <div className="mid">
        {isLoading ? <Loading /> : <CharList characters={characters} />}
        <CharMain character={character} episodes={episodes} />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
