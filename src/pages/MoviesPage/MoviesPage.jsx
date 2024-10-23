
import MovieList from '../../components/MovieList/MovieList';

import styles from './MoviesPage.module.css'



function MoviesPage({onSearch, movies}) {
    



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