import "./App.css";
import CharList from "./Component/CharList";
import Navbar from "./Component/Navbar";
import { episodes } from "../data/data";
import CharMain from "./Component/CharMain";
import { useEffect, useState } from "react";
import Loading from "./Component/Loading";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [query, setQuery] = useState("");
  const [charid, setCharid] = useState(null);
  const [character, setCharacter] = useState();
  const [favourite, setfavourite] = useState([]);

  const selectedchar = (id) => {
    setCharid(id);
    // console.log(id);
  };
  const addfavHandler = (char) => {
    setfavourite((prefav) => [...prefav, char]);
  };
  //////////////////check to see when we add to favourite///////////////////
  let isFavinclude = favourite.map((fav) => fav.id).includes(charid);

  useEffect(() => {
    async function fetchdata() {
      setIsloading(true);
      await axios
        .get(`https://rickandmortyapi.com/api/character?name=${query}`)
        .then((res) => setCharacters(res.data.results.slice(0, 5)))
        .catch(() => toast.error("there is no data"))
        .finally(() => setIsloading(false));
    }
    fetchdata();
  }, [query]);

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
        <Navbar
          numofchar={characters.length}
          numoffav={favourite.length}
          query={query}
          setQuery={setQuery}
        />
      </div>
      <div className="mid">
        {isLoading ? (
          <Loading />
        ) : (
          <CharList
            charid={charid}
            selectedchar={selectedchar}
            characters={characters}
          />
        )}
        <CharMain
          setCharacter={setCharacter}
          charid={charid}
          character={character}
          episodes={episodes}
          addfavHandler={addfavHandler}
          isFavinclude={isFavinclude}
        />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
