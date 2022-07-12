import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonmys, index) {
          return (
            <ul className="list-synonyms">
              <li key={index}>{synonmys}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
