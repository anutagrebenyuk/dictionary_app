import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <p className="fw-bold" key={index}>
              {synonym}
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
