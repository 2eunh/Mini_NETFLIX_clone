
const API_KEY = "5c3a194094fa8ee8d190bf4351edad21";
const BASE_PATH = "https://api.themoviedb.org/3";
const LANGUAGE = "en"


interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}
export interface IMovieDetails {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  genres: [{ id: number; name: string }];
  vote_average : number;
}

export interface IGetMoviesResult {
  backdrop_path(backdrop_path: any, arg1: string): unknown;
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

/////*************movies */

//now palying
export function getNowPlaying() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
//popular
export function getPopular() {
  return fetch(`${BASE_PATH}/movie/popular?language=${LANGUAGE}&api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
//top rated
export function getTopRated() {
  return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
//upcoming
export function getUpcoming() {
  return fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

//movie detail
export function getMovieDetail(movieId? : any) {
  return fetch(`${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getMovieVideo(movieId? : any) {
  return fetch(`${BASE_PATH}/movie/${movieId}/videos?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}


/////*********Tv shows */
