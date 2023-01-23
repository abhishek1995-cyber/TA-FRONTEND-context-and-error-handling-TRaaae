import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { useContext} from 'react'
import { DarkMode } from "./DarkMode";

function Main({ isDarkMode }) {
  let mode = useContext(DarkMode)
  // console.log(mode)
  return (
    <>
      <Title text="Text Component"  />
      <Paragraph  />
      <Title text="Card Component"  />
      <Cards />
      <Title text="Banner Component"  />
      <Banner  />
    </>
  );
}

export default Main;
