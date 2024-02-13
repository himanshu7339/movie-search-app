import axios from "axios";
import {
  getAllPopularMoviesRequest,
  getAllPopularMoviesFail,
  getAllPopularMoviesSuccess,
  getAllTopRatedMoviesFail,
  getAllTopRatedMoviesRequest,
  getAllTopRatedMoviesSuccess,
  getAllUpcomingMoviesRequest,
  getAllUpcomingMoviesSuccess,
  getAllUpcomingMoviesFail,
  searchingMoviesRequest,
  searchingMoviesSuccess,
  searchingMoviesFail,
} from "../Slices/moviesSlice";

export const getAllPopularMovies =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(getAllPopularMoviesRequest());
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjAwMTJmMDY1NDAyMjE3ZWFjZDI3M2FjMGZlYjJhYiIsInN1YiI6IjYzNDU5ODJkZDU1YzNkMDA3ZGVjZjYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ANedgh4J4v9LR7voU7subn1nAQT81BGT6fpcEvp3b7Q",
          },
        }
      );
      console.log(response.data);
      dispatch(getAllPopularMoviesSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getAllPopularMoviesFail());
    }
  };
export const getAllTopRatedMovies =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(getAllTopRatedMoviesRequest());
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjAwMTJmMDY1NDAyMjE3ZWFjZDI3M2FjMGZlYjJhYiIsInN1YiI6IjYzNDU5ODJkZDU1YzNkMDA3ZGVjZjYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ANedgh4J4v9LR7voU7subn1nAQT81BGT6fpcEvp3b7Q",
          },
        }
      );
      dispatch(getAllTopRatedMoviesSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getAllTopRatedMoviesFail());
    }
  };


export const getAllUpcomingMovies =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(getAllUpcomingMoviesRequest());
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjAwMTJmMDY1NDAyMjE3ZWFjZDI3M2FjMGZlYjJhYiIsInN1YiI6IjYzNDU5ODJkZDU1YzNkMDA3ZGVjZjYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ANedgh4J4v9LR7voU7subn1nAQT81BGT6fpcEvp3b7Q",
          },
        }
      );
      dispatch(getAllUpcomingMoviesSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(getAllUpcomingMoviesFail());
    }
  };

export const searchingMovies =
  (query) =>
  async (dispatch) => {
    try {
      dispatch(searchingMoviesRequest());
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=3f0012f065402217eacd273ac0feb2ab`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjAwMTJmMDY1NDAyMjE3ZWFjZDI3M2FjMGZlYjJhYiIsInN1YiI6IjYzNDU5ODJkZDU1YzNkMDA3ZGVjZjYyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ANedgh4J4v9LR7voU7subn1nAQT81BGT6fpcEvp3b7Q",
          },
        }
      );
      dispatch(searchingMoviesSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(searchingMoviesFail());
    }
  };
