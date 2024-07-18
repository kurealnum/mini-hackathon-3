import API_KEY from "./env";

import { useState } from "react";

function Dashboard() {
  const [title, setTitle] = useState();
  const [results, setResults] = useState({});

  function searchForMovieHandler(title) {
    const response = searchForMovie(title);
    response.then((result) => {
      setResults(result);
    });
  }

  return (
    <>
      <div className="search">
        <input onChange={(e) => setTitle(e.target.value)}></input>
        <button onClick={() => searchForMovieHandler(title)}>Search</button>
      </div>
      <div className="small-info">
        <p>Released: {results["Year"] ? results["Year"] : "???"}</p>
        <p>Rating: {results["Rated"] ? results["Rated"] : "???"}</p>
        <p>Runtime: {results["Runtime"] ? results["Runtime"] : "???"}</p>
      </div>
      <div className="main-info-wrapper">
        <div className="poster-wrapper">
          <h1>{results["Title"]}</h1>
          <img src={results["Poster"]}></img>
        </div>
        <div className="large-info">
          <h2>Genres: {results["Genre"] ? results["Genre"] : "???"}</h2>
          <p>{results["Plot"]}</p>
        </div>
      </div>
      <div className="credits">
        <p>Director: {results["Director"] ? results["Director"] : "???"}</p>
        <p>Writer: {results["Writer"] ? results["Writer"] : "???"}</p>
        <p>Actors: {results["Actors"] ? results["Actors"] : "???"}</p>
      </div>
    </>
  );
}

async function searchForMovie(title) {
  const response = await fetch(
    "http://www.omdbapi.com/?apikey=" + API_KEY + "&t=" + title,
  );
  return response.json();
}

export default Dashboard;
