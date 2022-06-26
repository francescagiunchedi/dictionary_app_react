import React from "react";
import { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setkeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searchin for ${keyword}`);
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
