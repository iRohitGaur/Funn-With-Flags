import React, { useState } from "react";
import "./styles.css";
import flagDictionary from "./flags";

export default function App() {
  let flagIcons = Object.keys(flagDictionary);
  const [flagName, setFlagName] = useState("Funn with Flags");

  function filterFlag(event) {
    flagClickHandler(event.target.value);
  }

  function flagClickHandler(flagIcon) {
    if (flagIcons.includes(flagIcon)) {
      setFlagName(flagDictionary[flagIcon]);
    } else if (flagIcon === "") {
      setFlagName("Funn with Flags");
    } else {
      setFlagName("Sorry! We dont have this in our list");
    }
  }

  function OneFlag(props) {
    return (
      <div onClick={() => flagClickHandler(props.icon)} className="flag-one">
        {props.icon}
      </div>
    );
  }

  return (
    <div className="App">
      <div className="header">
        <div className="flag-input-name flag-name"> {flagName} </div>
        <input
          onChange={filterFlag}
          className="flag-input-name flag-input"
          placeholder="enter flag emoji here"
        />
      </div>
      <div className="flag-all">
        {flagIcons.map((item) => (
          <OneFlag key={item} icon={item} />
        ))}
      </div>
      <div className="footer">
        Made by <a href="https://rohit.xyz">Rohit Gaur</a> with{" "}
        <i className="fab fa-react"></i> and <i className="fa fa-heart"></i>
      </div>
    </div>
  );
}
