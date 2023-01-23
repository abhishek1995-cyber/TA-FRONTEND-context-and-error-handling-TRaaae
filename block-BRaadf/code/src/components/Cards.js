import Card from "./Card";
import { useContext} from 'react'
import { DarkMode } from "./DarkMode";

function Cards({ isDarkMode }) {
  let mode = useContext(DarkMode)
  return (
    <div className="cards_wrap">
      <Card isDarkMode={mode} />
      <Card isDarkMode={mode} />
      <Card isDarkMode={mode} />
    </div>
  );
}

export default Cards;
