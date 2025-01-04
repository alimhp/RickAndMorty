import { EyeIcon } from "@heroicons/react/24/solid";

const CharList = ({ characters }) => {
  return (
    <div className="charlist">
      {characters.map((char) => (
        <CharComp char={char} key={char.id} />
      ))}
    </div>
  );
};

export default CharList;
const CharComp = ({ char }) => {
  return (
    <div className="char_list">
      <img src={char.image} alt={char.name} className="char_img" />
      <div className="midlist">
        <div className="midlist_name">
          <TopMidChar char={char} />
          <ButtonMidChar char={char} />
        </div>
      </div>
      <button className="eye">
        <EyeIcon />
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
