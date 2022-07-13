import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonmys, index) {
          return (
            <ul key={index} className="list-synonyms">
              <li>{synonmys}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
