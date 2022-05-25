import React from "react";
import MovieListing from "../movieListing/MovieListing";
import { useEffect } from "react";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movie/MovieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
