import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Card } from './Components/Card';
import { Animation1 } from './Components/Animation1';

const movieData = {
  Title: "The Avengers",
  Year: "2012",
  Rated: "PG-13",
  Released: "04 May 2012",
  Runtime: "143 min",
  Genre: "Action, Adventure, Sci-Fi",
  Director: "Joss Whedon",
  Writer: "Joss Whedon, Zak Penn",
  Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
  Plot:
    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
  Language: "English, Russian, Hindi",
  Country: "United States",
  Awards: "Nominated for 1 Oscar. 38 wins & 80 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "8.0/10"
    },
    {
      Source: "Rotten Tomatoes",
      Value: "91%"
    },
    {
      Source: "Metacritic",
      Value: "69/100"
    }
  ],
  Metascore: "69",
  imdbRating: "8.0",
  imdbVotes: "1,339,955",
  imdbID: "tt0848228",
  Type: "movie",
  DVD: "25 Sep 2012",
  BoxOffice: "$623,357,910",
  Production: "N/A",
  Website: "N/A",
  Response: "True"
};

function App() {
  const [data, setData] = useState({});
  const setDataFunct =  (data) => {
    setData(data);
  };
  async function getMoviesByName(name) {
    const URI = `http://www.omdbapi.com/?apikey=e2198cc1&t=${name}`;
    const response = await fetch(URI);
    const data = await response.json();
    setDataFunct(data);
  };
  // getMoviesByName("Avengers");
  return (
    <div className="App">
      <Animation1 logo={logo} />
      <section>
        <h1>Send them a smile with their favorite movie!</h1>
        <h2>Choose from thousands of movies...</h2>
        <div className="cards-container">
          <Card cardImage={""} cardTitle={"Card Title 1"} cardDescription={"this is the first card description."} />
          <Card cardImage={""} cardTitle={"Card Title 2"} cardDescription={"this is the second card description."} />
          <Card cardImage={""} cardTitle={"Card Title 3"} cardDescription={"this is the third card description."} />
          <div></div>
        </div>
        <div>{JSON.stringify(data.name)}</div>
      </section>
      <footer className="App-footer">

      </footer>
    </div>
  );
}

export default App;
