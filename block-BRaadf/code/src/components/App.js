import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import {DarkMode} from './DarkMode'

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      
      <DarkMode.Provider value={isDarkMode}>
        <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>

       <Header />
        <Main />
        <SwitchButton changeMode={this.changeMode} />
      </div>
      </DarkMode.Provider>
    );
  }
}

export default App;
