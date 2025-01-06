// import { EyeSlashIcon } from "@heroicons/react/16/solid";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const CharList = ({ characters, selectedchar, charid }) => {
  return (
    <div className="charlist">
      {characters.map((char) => (
        <CharComp
          charid={charid}
          char={char}
          key={char.id}
          selectedchar={selectedchar}
        />
      ))}
    </div>
  );
};

export default CharList;
const CharComp = ({ char, selectedchar, charid }) => {
  return (
    <div className="char_list">
      <img src={char.image} alt={char.name} className="char_img" />
      <div className="midlist">
        <div className="midlist_name">
          <TopMidChar char={char} />
          <ButtonMidChar char={char} />
        </div>
      </div>
      <button className="eye" onClick={() => selectedchar(char.id)}>
        {charid == char.id ? <EyeSlashIcon /> : <EyeIcon />}
      </button>
    </div>
  );
};
const TopMidChar = ({ char }) => {
  return (
    <div className="midlist_name_top">
      <div style={{ width: "100%" }}>{char.name}</div>
      {char.gender === "Male" ? "🧔" : "👧"}
    </div>
  );
};
function ButtonMidChar({ char }) {
  return (
    <div className="midlist_status">
      <div className={char.status === "Dead" ? "red" : "green"}></div>
      {char.status} - {char.species}
    </div>
  );
}
