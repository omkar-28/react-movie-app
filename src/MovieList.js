import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const MovieList = () => {
  const [movies, setmovies] = useState([]);
  let [page, setpage] = useState(1);
  const [loader, setLoader] = useState(false);
  // const [scrollTop, setSrollTop] = useState(false);
  console.log(movies);
  const ApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(ApiUrl);
      const { results } = await response.json();
      setmovies([...movies, ...results]);
      setLoader(false);
    }
    fetchMovies();
    //eslint-disable-next-line
  }, [page]);

  return (
    <React.Fragment>
      <div className="cards-group">
        {!movies ? (
          <Loader />
        ) : (
          movies.map((movie) => (
            <div
              className="card"
              key={movie.id}
              style={{
                background: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}') no-repeat center/cover`,
              }}
            >
              <div className="card-info">
                <h3>{movie.original_title}</h3><br/>
                <p>{movie.overview.substring(0, 100)}...</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div
        className={loader ? "loadmore loading" : "loadmore"}
        onClick={() => {
          setpage(page + 1);
          setLoader(true);
        }}
      >
        Load more
        {loader ? <div className="loader"></div> : ""}
      </div>

      {/* {scrollTop ? <div id="goto"></div> : ""} */}
    </React.Fragment>
  );
};

export default MovieList;
