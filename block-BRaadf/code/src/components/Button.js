import React from "react";
import { useContext} from 'react'
import { DarkMode } from "./DarkMode";

export default function SwitchButton({ isDarkMode, changeMode }) {
  let mode = useContext(DarkMode)
  return (
    <button
      className={`btn ${mode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {mode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
