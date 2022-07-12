import React from "react";
import { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultkey);
  let [results, setresults] = useState(null);
  let [loaded, setloaded] = useState(false);

  function handleResponse(repsponse) {
    setresults(repsponse.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handlesubmit(event) {
    event.preventDefault();
    search();
  }
  function handlekeyword(event) {
    setkeyword(event.target.value);
  }

  function load() {
    setloaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <form onSubmit={handlesubmit}>
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
  } else {
    load();
  }
}
