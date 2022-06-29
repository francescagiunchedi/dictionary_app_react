import React from "react";
import { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  let [results, setresults] = useState(null);

  function handleResponse(repsponse) {
    console.log(repsponse.data[0]);
    console.log(repsponse.data[0].meanings[0].definitions[0].definition);
    setresults(repsponse.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handlekeyword(event) {
    console.log(event.target.value);
    setkeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input
          className="search-bar"
          type="search"
          autoFocus={true}
          onChange={handlekeyword}
        />
      </form>

      <Results results={results} />
    </div>
  );
}
