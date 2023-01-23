import { useContext} from 'react'
import { DarkMode } from "./DarkMode";


function Title({ text, isDarkMode }) {
  let mode = useContext(DarkMode)
  console.log(mode)
  return (
    <h2
      className={`heading ${
        mode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;
