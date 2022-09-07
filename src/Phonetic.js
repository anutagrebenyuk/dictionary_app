import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  let transcription = null;
  let audioUrl = null;

  props.data.phonetics.map(function (phonetic, index) {
    audioUrl = phonetic.audio;
    transcription = phonetic.text;
    return null;
  });

  let audio = new Audio(audioUrl);
  function playSound() {
    audio.play();
  }

  return (
    <div className="Phonetic">
      <div className="row">
        <div className="col-1 me-4">
          <button onClick={playSound} className="play-btn">
            <i class="fa-solid fa-music"></i>
          </button>
        </div>
        <div className="col-5">
          <h2>{props.data.word}</h2>
          <p>{transcription}</p>
        </div>
      </div>
    </div>
  );
}
