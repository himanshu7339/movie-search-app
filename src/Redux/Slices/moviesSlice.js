import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  movies: [],
  topRatedMovie: [],
  upcomingMovie: [],
  searchingMovie:[],
  message: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    getAllPopularMoviesRequest: (state) => {
      state.loading = true;
    },
    getAllPopularMoviesSuccess: (state, action) => {
      (state.loading = false), (state.movies = action.payload);
    },
    getAllPopularMoviesFail: (state, action) => {
      (state.loading = true), (state.message = action.payload.message);
    },
    // Reducers for top-rated movies
    getAllTopRatedMoviesRequest: (state) => {
      state.loading = true;
    },
    getAllTopRatedMoviesSuccess: (state, action) => {
      (state.loading = false), (state.topRatedMovie = action.payload);
    },
    getAllTopRatedMoviesFail: (state, action) => {
      (state.loading = true), (state.message = action.payload.message);
    },

    // upcoming movie

    getAllUpcomingMoviesRequest: (state) => {
      state.loading = true;
    },
    getAllUpcomingMoviesSuccess: (state, action) => {
      (state.loading = false), (state.upcomingMovie = action.payload);
    },
    getAllUpcomingMoviesFail: (state, action) => {
      (state.loading = true), (state.message = action.payload.message);
    },

     // searching movie

     searchingMoviesRequest: (state) => {
      state.loading = true;
    },
    searchingMoviesSuccess: (state, action) => {
      (state.loading = false), (state.searchingMovie = action.payload);
    },
    searchingMoviesFail: (state, action) => {
      (state.loading = true), (state.message = action.payload.message);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllPopularMoviesRequest,
  getAllPopularMoviesSuccess,
  getAllPopularMoviesFail,
  getAllTopRatedMoviesRequest,
  getAllTopRatedMoviesSuccess,
  getAllTopRatedMoviesFail,
  getAllUpcomingMoviesRequest,
  getAllUpcomingMoviesSuccess,
  getAllUpcomingMoviesFail,
  searchingMoviesSuccess,
  searchingMoviesRequest,
  searchingMoviesFail
} = moviesSlice.actions;

export default moviesSlice.reducer;
