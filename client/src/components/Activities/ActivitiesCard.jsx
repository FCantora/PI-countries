/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { deleteActivity } from "../../redux/actioncreators";
import { useDispatch } from "react-redux";
import styles from "./ActivitiesCard.module.css";


export default function ActivitiesCard({ id, activity, difficulty, duration, season, countries }) {
    const dispatch = useDispatch();
    const onClose = () => {
        const shoudlDelete = window.confirm(
            `Are you sure you want to delete the ${activity} activity?`
        )

        if (shoudlDelete) dispatch(deleteActivity(id))
    }

    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={onClose}>X</button>
            <div>
                <h1 className={styles.title}>{activity}</h1>
                <div className={styles.info}>
                    <p>Difficulty: {difficulty}</p>
                    <p>Duration: {duration} hours</p>
                    <p>Season: {season.join(", ")}</p>
                </div>
                <div className={styles.countryInfo}>
                    <h2>Countries:</h2>
                    <div className={styles.countries}>
                        {countries.map(country => (
                            <p className={styles.country} key={country.id}>
                                <Link to={`/detail/${country.id}`} className={styles.link}>
                                    {country.name}
                                </Link>
                            </p>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}
