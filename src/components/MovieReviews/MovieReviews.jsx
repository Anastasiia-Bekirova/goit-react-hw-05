import { fetchMovieReviews } from "../../api/searchMovie"
import { useEffect, useState } from 'react';
import styles from './MovieReviews.module.css'

function MovieReviews({ movieId }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => { 
     if (!movieId) 
    return;
  
    const getMovieReviews = async () => {
    
      
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response.data.results); 
      } catch (error) {
        alert("No reviews to show!")
      }
    };

    getMovieReviews();
  }, [movieId]);

    return (
       <div>
            <h2>Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews available.</p>
            ) : (
                <ul>
                    {reviews.map(review => (
                        <li key={review.id}>
                            <p>Author: {review.author}</p>
                            <p>{review.content}</p>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
          
    )
}

export default MovieReviews