import React from "react";
import "./App.scss";
import ToolContext from "./ToolContext";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import Curriculum from "./Curriculum/Curriculum";

function App() {
  return (
    <ToolContext>
      <HeaderButtons />
      <Curriculum />
    </ToolContext>
  );
}

export default App;
