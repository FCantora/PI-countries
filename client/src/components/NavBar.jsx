import { useLocation, useNavigate } from "react-router-dom";
import Searchbar from "./Searchbar";
import styles from './NavBar.module.css'
import img from '../assets/airplane.svg'

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateTo = (path) => {
        navigate(path);
    };
    return (
        <div className={styles.navbar}>
            <button className={styles.homeButton} onClick={() => navigateTo('/home')}>
                <img src={img} alt="airplane" className={styles.img} />
            </button>
            {location.pathname === '/home' && (
                <div className={styles.searchBar}>
                    <Searchbar />
                </div>
            )}
            <button className={styles.button} onClick={() => navigateTo('/activityform')}>
                Add Activity
            </button>
            <button className={styles.button} onClick={() => navigateTo('/activities')}>
                Activities
            </button>
            <button className={styles.logoutButton} onClick={() => navigateTo('/')}>
                Logout
            </button>
        </div>
    )
}
