import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <em>Example: {props.example}</em>
      </div>
    );
  } else {
    return null;
  }
}
