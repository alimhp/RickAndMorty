import { EyeIcon } from "@heroicons/react/24/solid";

const CharList = ({ allCharacters }) => {
  return (
    <div className="charlist">
      {allCharacters.map((char) => (
        <div className="char_list" key={char.id}>
          <img src={char.image} alt={char.name} className="char_img" />
          <div className="midlist">
            <div className="midlist_name">
              <div className="midlist_name_top">
                <div>{char.name}</div>
                {char.gender === "Male" ? "🧔" : "👧"}
              </div>
              <div className="midlist_status">
                <div className={char.status === "Dead" ? "red" : "green"}></div>
                {char.status} - {char.species}
              </div>
            </div>
          </div>
          <button className="eye">
            <EyeIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CharList;
