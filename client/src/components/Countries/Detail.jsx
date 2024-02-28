
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../../redux/actioncreators";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; //* El hook sirve para usar lo que haya en la URL.
import styles from "./Detail.module.css";

export default function Detail() {
    const { key } = useParams(); //* Extramos la propiedad key xq así lo bautizamos en App dentro de Route en el link dinámico.
    const history = useNavigate();
    const dispatch = useDispatch();
    const country = useSelector(state => state.detail);

    const goBack = () => {
        history(-1);
        dispatch(cleanDetail());
    }

    useEffect(() => {
        dispatch(getDetail(key));
    }, [key]);

    return (
        <div className={styles.detailContainer}>
            <div className={styles.detail}>
                <button onClick={goBack} className={styles.button}>←</button>
                <h2 className={styles.name}>{country.name}</h2>
                {country.flag && <img src={country.flag} alt={country.name} className={styles.image} />}
                <ul className={styles.list}>
                    <li>{country.id}</li>
                    <li>Continent: {country.continent}</li>
                    <li>Capital: {country.capital}</li>
                    <li>Subregion: {country.subregion}</li>
                    <li>Area: {country.area} kms</li>
                    <li>Population: {country.population}</li>
                    {country.Activities && country.Activities.length > 0 ? (
                        <li>Activities: {country.Activities.map(activity => activity.name).join(', ')}</li>
                    ) : (
                        <li>No activities done yet</li>
                    )}
                </ul>
            </div>
            {country.Activities && country.Activities.length > 0 && (
                <div className={styles.activities}>
                    <button className={styles.activityButton} onClick={() => history('/activities')}>
                        Show Activities
                    </button>
                </div>
            )}
        </div>
    )
}