import React from "react";
import Definition from "./Definition";
import Example from "./Example";
import Synonyms from "./Synonyms";
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
              <Definition definition={definition.definition} />
            </div>
            <div className="example">
              <Example example={definition.example} />
            </div>
            <div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
