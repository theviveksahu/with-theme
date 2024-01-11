import { useState } from "react";
import "./App.css";
import withTheme from "./withTheme";

function App(props) {
  const { isDarkTheme } = props;
  return <div className={`App ${isDarkTheme ? "dark" : "light"}`}></div>;
}

export default withTheme(App);
