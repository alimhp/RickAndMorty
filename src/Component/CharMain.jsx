const CharMain = ({ character, episodes }) => {
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
            <button className="main_btn">Add to Favorite</button>
          </div>
        </div>
      }
      <Episodecomp episodes={episodes} />
    </div>
  );
};

export default CharMain;
const Episodecomp = ({ episodes }) => {
  return (
    <div className="episode_container">
      <div className="episode_text">List of episode :</div>
      {episodes.map((epis, index) => (
        <div className="episode">
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
