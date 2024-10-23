import clsx from "clsx"
import styles from './Navigation.module.css'
import { NavLink } from "react-router-dom";

const buildCssClasses = ({ isActive }) => clsx(styles.link, isActive && styles.active);

function Navigation() {
   
    return (
        <div className={styles.menuWrapper}>
            <NavLink className={buildCssClasses}  to="/">Home</NavLink>
            <NavLink className={buildCssClasses}  to="/movies">Movies</NavLink>
        </div>
    )
}
export default Navigation