import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You are serching for ${keyword}`);
  }

  function handleKeywordInput(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={handleKeywordInput} />
      <input type="submit" value="Search" />
    </form>
  );
}
