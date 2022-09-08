import { React, useState } from "react";
import List from "./searchList";

function Search() {

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="container">
      <div className="Search">
        <input type="text" placeholder="Search" onChange={inputHandler}/>
      </div>
      <List input={inputText}/>
    </div>
  );
}

export default Search;
