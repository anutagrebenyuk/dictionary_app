import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  //Added dictionary API from dictionaryapi.dev/
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordInput(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordInput} />
        <input type="submit" value="Search" />
      </form>
      <Results results={results} />
    </div>
  );
}
