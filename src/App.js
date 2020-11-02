import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import MovieList from "./MovieList";

const App = () => {
  return (
    <div className="container">
      <Searchbar />
      <MovieList />
    </div>
  );
};

export default App;
