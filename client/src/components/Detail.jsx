/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../redux/actioncreators";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"; //* El hook sirve para usar lo que haya en la URL.
// import styles from "./Detail.module.css";

export default function Detail() {
    const { key } = useParams(); //* Extramos la propiedad key xq así lo bautizamos en App dentro de Route en el link dinámico.
    const dispatch = useDispatch();
    const country = useSelector(state => state.detail);

    useEffect(() => {
        dispatch(getDetail(key));
    }, [key]);

    return (
        <div /*className={styles.detailContainer}*/>
            <Link to='/home'>
                <button /*className={styles.button}*/>←</button>
            </Link>
            <p>{country.id}</p>
            <h2 /*className={styles.name}*/>{country.name}</h2>
            {country.flag && <img src={country.flag} alt={country.name} /*className={styles.image}*/ />}
            <ul /*className={styles.det}*/>
                <li>Continent: {country.continent}</li>
                <li>Capital: {country.capital}</li>
                <li>Subregion: {country.subregion}</li>
                <li>Area: {country.area}</li>
                <li>Population: {country.population}</li>
            </ul>
        </div>
    )
}