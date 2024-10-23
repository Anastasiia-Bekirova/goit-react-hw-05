
import { fetchMovieCast } from "../../api/searchMovie";
import { useEffect, useState } from 'react';

import styles from './MovieCast.module.css'

const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

function MovieCast({movieId}) {
    const [actors, setActors] = useState([]);

    useEffect(() => { 
     if (!movieId) 
    return;
  
    const getMovieCast = async () => {
    
      
      try {
        const response = await fetchMovieCast(movieId);
        setActors(response.data.cast); 
      } catch (error) {
        alert("No actors to show!")
      }
    };

    getMovieCast();
  }, [movieId]);
  
    return (
        
            
                <ul>
                    {actors.map((actor) => (
                        <li key={actor.id}>
                            <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : defaultImg} width="250px"
                                alt={actor.name} />
                            <p>{actor.name}</p>
                            <p>Character: {actor.character}</p>
                        </li>
                    ))}

                </ul>
            
        
       
        
    )
}

export default MovieCast;