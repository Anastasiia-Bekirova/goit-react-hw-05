import axios from "axios";


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const axiosOptions = {
 headers: {
 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjAzOWYwMTgyM2U0NDlhYTEyZjc3ZmVjMzhlYTJmZSIsIm5iZiI6MTcyOTUwNjQyMi4wMzUwOSwic3ViIjoiNjcxNjI0ZTJlNmVkYzNiYWQ2MTA0MGQxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.QqQrBQk3-05zKZx4tsf5_PipjkzPsnNcr9cDPpq8tN8'
    },


};

export const fetchTrendingMovies = () => {
 return axios.get(`/trending/movie/day?language=en-US`, axiosOptions);
}

export const fetchMovies = (searchedValue) => {
    return axios.get(`/search/movie?include_adult=false&language=en-US&page=1`, {...axiosOptions, params: {
      query: searchedValue, 
    }, }); 
}

export const fetchMovieDetails = (movieId) => {
  return axios.get(`/movie/${movieId}?language=en-US`, axiosOptions);
}
export const fetchMovieCast = (movieId) => {
  return axios.get(`/movie/${movieId}/credits?language=en-US`, axiosOptions);
}
export const fetchMovieReviews = (movieId) => {
  return axios.get(`/movie/${movieId}/reviews?language=en-US`, axiosOptions);
}
