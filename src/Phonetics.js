import React from "react";
import "./phonetics.css";

export default function Phonetcis(props) {
  return (
    <div className="phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span>{props.phonetics.text}</span>
    </div>
  );
}
