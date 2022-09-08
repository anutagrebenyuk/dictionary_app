import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001620fcb8993224796a613e0376c6851f0";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  //Added dictionary API from dictionaryapi.dev/
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordInput(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word are you searching for?</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  onChange={handleKeywordInput}
                  defaultValue={props.defaultKeyword}
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input type="submit" value="🔎" className="btn-search px-3" />
              </div>
            </div>
          </form>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
        <p className="text-center text-muted">
          Coded by Hanna Hrebeniuk and is{" "}
          <a
            href="https://github.com/anutagrebenyuk/dictionary_app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced{" "}
          </a>{" "}
          on GitHub
        </p>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
