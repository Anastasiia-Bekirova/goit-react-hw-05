import { useState, useEffect } from 'react'
import { Routes, Route, useSearchParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { fetchMovies, fetchTrendingMovies } from './api/searchMovie';
import './App.css'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));

const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));




 const App = () => {
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  
  const [searchParams, setSearchParams] = useSearchParams();
 
  
  const searchedValue = searchParams.get("query");
  const [movieId, setMovieId] = useState(null);
   
  const handleSubmit = (value) => {
  setSearchParams({ query: value });
  setMovies([]);
  
  };
  
 
   const handleMovieId = (id) => {
    setMovieId(id); // Update movieId state
  };
   
   
   useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        setTrendingMovies(response.data.results); 
      } catch (error) {
        alert("No movies in trend!")
      }
    };

    getTrendingMovies();
  }, []);
 
  useEffect(() => {
    const onSearch = async () => {
      if (!searchedValue) return;

      try {
       
        const response = await fetchMovies(searchedValue);
        if (movies.length === 0) {
          setMovies(response.data.results);
        } 
        
      } catch (error) { 
        alert("No movies with such name!")
      
      }

    };
        

      onSearch();
  }, [searchedValue]);
  
  
  return (
    <>
      <header>
        <Navigation />
      </header>
      
        <div>
       
        <Suspense fallback={<div>Loading page...</div>}>
         <Routes>
          <Route path="/" element={<HomePage movies={trendingMovies}/>} />
          <Route path="/movies" element={<MoviesPage onSearch={handleSubmit} movies={movies}/>} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage onMovieIdSelect={handleMovieId}/>}>
            <Route path="cast" element={<MovieCast movieId={movieId}/>} />
            <Route path="reviews" element={<MovieReviews movieId={movieId}/>} />
          </Route>
           <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
        </Suspense>
       
         
        </div>
        
      
  </>
   
  )
}

export default App;
