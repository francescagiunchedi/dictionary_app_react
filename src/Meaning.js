import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h5>/{props.meaning.partOfSpeech}/</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index} className="definition-results">
            <div className="definition">
              <p>{definition.definition}</p>
            </div>
            <div className="example">
              <em>{definition.example}</em>
            </div>
          </div>
        );
      })}
    </div>
  );
}
