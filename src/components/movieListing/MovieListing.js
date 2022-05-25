import React from "react";
import MovieCard from "../movieCard/MovieCard";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movie/MovieSlice";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllShows);
  let renderMovie,
    renderSeries = "";
  renderMovie =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderSeries =
    series.Response === "True" ? (
      series.Search.map((ser, index) => <MovieCard key={index} data={ser} />)
    ) : (
      <div className="movie-error">
        <h3>{series.Error}</h3>
      </div>
    );
  return (
    <div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movie List</h2>
          <div className="movie-container">{renderMovie}</div>
        </div>
      </div>
      <div className="movie-list">
        <h2>Series List</h2>
        <div className="movie-container">{renderSeries}</div>
      </div>
    </div>
  );
};

export default MovieListing;
