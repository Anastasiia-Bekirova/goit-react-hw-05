import { useState, useEffect } from 'react'
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../api/searchMovie';

import styles from './HomePage.module.css'



function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);

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
    
    return (
        <div className={styles.wrapper}>
            <h2>Trending today</h2>
            <MovieList movies={trendingMovies}/>
        
        </div>
       

    )
}  

export default HomePage