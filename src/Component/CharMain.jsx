import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const CharMain = ({
  addfavHandler,
  character,
  episodes,
  charid,
  setCharacter,
  isFavinclude,
}) => {
  const [episodechar, setEpisodechar] = useState([]);
  useEffect(() => {
    async function getchar() {
      let { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${charid}`
      );
      const episodeid = data.episode.map((epis) => epis.split("/").at(-1));
      let { data: episode } = await axios.get(
        `https://rickandmortyapi.com/api/episode/${episodeid}`
      );
      // console.log(episode);
      setEpisodechar([episode].flat().slice(0, 6));
      setCharacter(data);
    }
    getchar();
  }, [charid]);
  if (!character)
    return <div className="main_text__select">please select character</div>;
  return (
    <div className="main">
      {
        <div className="chardetail" key={character.id}>
          <div>
            <img src={character.image} alt="" className="img_main" />
          </div>
          <div className="detail_main">
            <div className="name_main">
              <div className="imoji"></div>
              <div className="namechar">{character.name}</div>
              {character.gender === "Male" ? "🧔" : "👧"}
            </div>
            <div className="charmain_status">
              {" "}
              <div
                className={character.status === "Dead" ? "red" : "green"}
              ></div>
              {character.status} - {character.species}
            </div>
            <div className="location">
              <div className="lastknown_text">last known location :</div>
              <div className="main_loc_detail">{character.location.name}</div>
            </div>
            {/* isFavinclude */}
            {isFavinclude ? (
              <p>already added to favourite list✔️</p>
            ) : (
              <button
                onClick={() => addfavHandler(character)}
                className="main_btn"
              >
                Add to Favorite
              </button>
            )}
          </div>
        </div>
      }
      <Episodecomp episodes={episodes} episodechar={episodechar} />
    </div>
  );
};

export default CharMain;
const Episodecomp = ({ episodechar }) => {
  const [sorted, setSorted] = useState(true);
  let sorteditem;
  if (sorted) {
    sorteditem = [...episodechar].sort(
      (a, b) => new Date(a.created) - new Date(b.created)
    );
  } else {
    sorteditem = [...episodechar].sort(
      (a, b) => new Date(b.created) - new Date(a.created)
    );
  }
  return (
    <div className="episode_container">
      <div className="episode_container_top">
        <div className="episode_text">List of episode :</div>
        <ArrowDownIcon
          onClick={() => setSorted((sorted) => !sorted)}
          className="episode_container_top_icon"
          style={{ rotate: sorted ? "0deg" : "180deg" }}
        />
      </div>
      {sorteditem.map((epis, index) => (
        <div className="episode" key={episodechar.id}>
          <div className="episode_left">
            {/* {index + 1 < 10 ? `0${index + 1}` : index + 1} - {epis.episode} :{" "} */}
            {String(index + 1).padStart(2, "0")} - {epis.episode} {epis.name}
          </div>
          <div className="episode_right">{epis.air_date}</div>
        </div>
      ))}
    </div>
  );
};
