import { useState, useEffect } from 'react'
import { fetchMovies } from '../../api/searchMovie';
import MovieList from '../../components/MovieList/MovieList';
import {useSearchParams} from "react-router-dom";
import styles from './MoviesPage.module.css'



function MoviesPage() {
    
const [movies, setMovies] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();
const searchedValue = searchParams.get("query");
const [movieId, setMovieId] = useState(null);
   
  const onSearch = (value) => {
  setSearchParams({ query: value });
  setMovies([]);
  
  };
  
 
   const handleMovieId = (id) => {
    setMovieId(id); // Update movieId state
  };
   
   
  
 
  useEffect(() => {
    const fetchMoviesData = async () => {
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
        

      fetchMoviesData();
  }, [searchedValue]);


    const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
        const topic = form.elements.topic.value;
        if(form.elements.topic.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}

    onSearch(topic);
    form.reset();
  };

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search movies..." />
      <button>Search</button>
            </form>
            <MovieList movies={ movies} />
      </div>
    
  );
}

export default MoviesPage