import { Link } from "react-router-dom";
import styles from './Landing.module.css'
import img from '../assets/airplane.svg'

export default function Landing() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.h1}>
                    Welcome to the Countries App!
                </h1>
                <img src={img} alt="airplane" className={styles.img} />
            </div>
            <Link to='/home'>
                <button className={styles.enterButton}>Ingresar</button>
            </Link>
        </div>
    )
}