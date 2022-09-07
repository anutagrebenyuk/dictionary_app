import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <div className="definition mt-3">{definition.definition}</div>
              <div className="example">{definition.example}</div>
              <div className="synonyms">
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
