import React from "react";
import { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setkeyword] = useState(props.defaultkey);
  let [results, setresults] = useState(null);
  let [loaded, setloaded] = useState(false);
  let [photos, setphotos] = useState(null);

  function handledictionaryresponse(repsponse) {
    setresults(repsponse.data[0]);
  }
  function handlepexeresponse(response) {
    setphotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handledictionaryresponse);

    let pexeURL = `https://api.pexels.com/v1/search?query=${keyword}&per_page=2`;
    let pexelApi = "563492ad6f91700001000001d781c9b21a7e4f5daf9f089929c1b8b2";
    axios
      .get(pexeURL, { headers: { Authorization: `Bearer ${pexelApi}` } })
      .then(handlepexeresponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
