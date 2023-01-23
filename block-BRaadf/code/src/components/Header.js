import { useContext} from 'react'
import { DarkMode } from "./DarkMode";

function Header({ isDarkMode }) {
  let mode = useContext(DarkMode)
  return (
    <h1 className={`heading ${mode ? "heading-dark" : "heading-light"}`}>
      {mode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
