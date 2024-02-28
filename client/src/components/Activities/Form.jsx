import { useEffect, useState } from "react";
import Validations from "../Countries/Validations";
import axios from "axios";
import { postActivity } from "../../redux/actioncreators";
import { useDispatch } from "react-redux";
import styles from './Form.module.css'
import { useNavigate } from "react-router-dom";

const ENDPOINT = 'http://localhost:3001/countries';

export default function Form() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [activity, setActivity] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        season: [],
        countries: []
    });

    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: ""
    });

    const handleChange = (event) => {
        const { name, value, options } = event.target;
        if (name === 'season') {
            const selectedSeason = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);
            setActivity({
                ...activity,
                [name]: selectedSeason
            })
        } else if (name === 'countries') {
            const selectedCountries = Array.from(options)
                .filter((option) => option.selected)
                .map((option) => option.value);
            setActivity({
                ...activity,
                [name]: selectedCountries
            })
        } else {
            setActivity({
                ...activity,
                [name]: value
            });

        }

        const newErrors = Validations({
            ...activity,
            [name]: value
        })
        setErrors({
            ...errors,
            ...newErrors
        })
    }


    const submitHandler = async (event) => {
        event.preventDefault();

        const dataToSend = {
            name: activity.name,
            difficulty: activity.difficulty,
            duration: activity.duration,
            season: activity.season,
            countries: activity.countries
        };
        dispatch(postActivity(dataToSend));
    };


    //!TODO EL BLOQUE QUE SIGUE HASTA EL USEEFFECT SE PARECE A UNA PETICIÓN YA HECHA, VER DE RECICLAR CÓDIGO.
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const { data } = await axios(ENDPOINT);
                setCountryList(data);
            } catch (error) {
                return {
                    error: error.message
                }
            }

        };
        fetchCountries();
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Add Activities</h1>
                <form className={styles.form} onSubmit={submitHandler}>
                    <div>
                    </div>
                    <div className={styles.margins}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="name">Activity:</label>
                            <input className={styles.input} value={activity.name} onChange={handleChange} type="text" name="name" />
                        </div>
                        <span className={styles.error}>{errors.name}</span>
                    </div>
                    <div className={styles.margins}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="difficulty">Difficult:</label>
                            <input
                                className={styles.input}
                                type="range"
                                name="difficulty"
                                min={0}
                                max={5}
                                value={activity.difficulty}
                                onChange={handleChange}
                            />
                        </div>
                        <span className={styles.error}>{errors.difficulty}</span>
                    </div>
                    <div className={styles.margins}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="duration">Duration:</label>
                            <input className={styles.input} value={activity.duration} onChange={handleChange} type="number" name="duration" placeholder="hours" />
                        </div>
                    </div>
                    <div className={styles.margins}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="season">Season:</label>
                            <select className={styles.input} value={activity.season} onChange={handleChange} multiple name="season">
                                <option value="Summer">Summer</option>
                                <option value="Autumn">Autumn</option>
                                <option value="Winter">Winter</option>
                                <option value="Spring">Spring</option>
                            </select>
                        </div>
                        <span className={styles.error}>{errors.season}</span>
                    </div>
                    <div className={styles.margins}>
                        <div className={styles.inputContainer}>
                            <label className={styles.label} htmlFor="countries">Country:</label>
                            <select className={styles.input} name="countries" multiple value={activity.countries} onChange={handleChange}>
                                <option disabled>Select a country</option>
                                {countryList.map(country => (
                                    <option key={country.id} value={country.name}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <span className={styles.error}>{errors.countries}</span>
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.button} type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className={styles.activities}>
                <button className={styles.activityButton} onClick={() => navigate('/activities')}>
                    Show Activities
                </button>
            </div>
        </div>
    )
}