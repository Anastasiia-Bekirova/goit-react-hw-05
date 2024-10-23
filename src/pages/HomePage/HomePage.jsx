
import MovieList from '../../components/MovieList/MovieList';

import styles from './HomePage.module.css'

function HomePage({movies}) {
    
    return (
        <div className={styles.wrapper}>
            <h2>Trending today</h2>
            <MovieList movies={movies}/>
        
        </div>
       

    )
}  

export default HomePage