import React from "react";
import { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  function handleResponse(repsponse) {
    console.log(repsponse.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searchin for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`;
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
    </div>
  );
}
