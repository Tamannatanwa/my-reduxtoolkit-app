import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieTest = "Harry";
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${movieTest}&typ=movie`
    );
    return response.data;
  }
);


export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "friends";
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${seriesText}&typ=Series`
    );
    return response.data;
  }
);


export const fetchAsyncMovieShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieShowDetail",
  async (id) => {
    const response = await MovieApi.get(
      `?apikey=${APIKey}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows:{},
  selectMovieShow:{},
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieShow:(state)=>{
      state.selectMovieShow={}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pendding...");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetching Successfully...");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected...");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
        console.log("Fetching Successfully...");
        return { ...state, shows: payload };
    },
    [fetchAsyncMovieShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetching Successfully...");
      return { ...state,  selectMovieShow: payload };
  },
  },
});
export const { removeSelectedMovieShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllmovieShows = (state) => state.movies.selectMovieShow;
export default movieSlice.reducer;


