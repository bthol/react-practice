import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Comp1 } from './Components/Comp1';


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
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo App-logo-2" alt="logo" />
      </section>
      <Comp1 
        data={data}
      />
    </div>
  );
}

export default App;
