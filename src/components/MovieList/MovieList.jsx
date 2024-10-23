import { Link, useLocation } from "react-router-dom";
import styles from './MovieList.module.css';

function MovieList({ movies }) {
    const location = useLocation();
    return (
         <ul>
        {movies.map((movie) => (
            <li className={styles.movieLink} key={movie.id}>
          <Link state={{
                    from: location
                  }} to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
      </ul>
    );
    
}

export default MovieList