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
      <input onChange={(e) => setTitle(e.target.value)}></input>
      <button onClick={() => searchForMovieHandler(title)}></button>
      <div class="small-info">
        <p>Released: {results["Year"]}</p>
        <p>Rating: {results["Rated"]}</p>
        <p>Runtime: {results["Runtime"]}</p>
      </div>
      <h1>{results["Title"]}</h1>
      <img src={results["Poster"]}></img>
      <div class="large-info">
        <p>{results["Genre"]}</p>
        <p>{results["Plot"]}</p>
      </div>
      <div class="credits">
        <p>Director: {results["Director"]}</p>
        <p>Writer: {results["Writer"]}</p>
        <p>Actors: {results["Actors"]}</p>
      </div>
    </>
  );
}

async function searchForMovie(title) {
  const response = await fetch(
    "http://www.omdbapi.com/?apikey=1ff93909&t=" + title,
  );
  return response.json();
}

export default Dashboard;
