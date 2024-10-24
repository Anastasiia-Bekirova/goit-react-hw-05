import { useParams, Outlet } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
import { fetchMovieDetails } from '../../api/searchMovie';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Suspense } from 'react';



const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'


function MovieDetailsPage() {

    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { movieId } = useParams();
   
    
 useEffect(() => {
     if (!movieId) 
    return;
 
    const getMovieDetails = async () => {
    
      
      try {
        const response = await fetchMovieDetails(movieId);
        setMovie(response.data); 
      } catch (error) {
        alert("No movie details to show!")
      }
    };

    getMovieDetails();
  }, [movieId]);

   if (!movie) {
    return <p>Loading movie details...</p>;
  }
  
    const backUrl = location.state?.from || "/movies";
    const goBack = () => navigate(backUrl);
    
   
    
    return (
        <div className={styles.wrapper}>
    <button className={styles.goBack} onClick={goBack}> &larr; Go back</button>
    <div className={styles.movieDetails}>
        <img 
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImg} 
            alt={movie.title} 
        />
        <div>
            <h1>{movie.title} ({movie.release_date.slice(0, 4)})</h1>
            <p className={styles.text}>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h2>Overview</h2>
            <p className={styles.text}>{movie.overview}</p>
            <h2>Genres</h2>
            <p className={styles.text}>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
    </div>
    <div className={styles.additionalInfo}>
                <h2>Additional information</h2>
                <ul>
                    <li>
                        <Link state={{from: backUrl}} to={`cast`}>
            Cast
                        </Link>
                    </li>
                    <li>
                        <Link state={{from: backUrl}} to={`reviews`}>
            Reviews
                        </Link>
                    </li>
                </ul>        
            </div>
             <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
           
                 
</div>
);
}

    export default MovieDetailsPage;