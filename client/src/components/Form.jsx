/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Validations from "./Validations";
import axios from "axios";

const URL = "http://localhost:3001/activities"
const ENDPOINT = 'http://localhost:3001/countries';

export default function Form() {
    const [activity, setActivity] = useState({
        id: "",
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
        console.log(activity);

        const formData = new FormData(activity);
        const { name, difficulty, duration, season, countries } = formData;


        try {
        const response = await axios.post(URL, {
          name,
          difficulty,
          duration,
          season,
          countries,
        });

        // Puedes hacer más acciones después de la creación exitosa, como limpiar el formulario o redirigir a otra página.
          } catch (error) {
            console.error("Error al crear la actividad:", error.message);
            alert("Error al crear la actividad");
          }
    };


    //!TODO EL BLOQUE QUE SIGUE HASTA EL USEEFFECT SE PARECE A UNA PETICIÓN YA HECHA, VER DE RECICLAR CÓDIGO.
    const [countryList, setCountryList] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const { data } = await axios(ENDPOINT);
                setCountryList(data);
            } catch (error) {
                console.log(error);
            }

        };
        fetchCountries();
    }, [])

    return (
        <form onSubmit={submitHandler}>
            <div>
                <h1>Add Activities</h1>
            </div>
            <div>
                <label htmlFor="name">Activity:</label>
                <input value={activity.name} onChange={handleChange} type="text" name="name" />
                <br />
                <span style={{ color: 'red' }}>{errors.name}</span>
            </div>
            <br />
            <div>
                <label htmlFor="difficulty">Difficult:</label>
                <input
                    type="range"
                    name="difficulty"
                    min={0}
                    max={5}
                    value={activity.difficulty}
                    onChange={handleChange}
                />
                <br />
                <span style={{ color: 'red' }}>{errors.difficulty}</span>
            </div>
            <br />
            <div>
                <label htmlFor="duration">Duration:</label>
                <input value={activity.duration} onChange={handleChange} type="number" name="duration" placeholder="hours" />
            </div>
            <br />
            <div>
                <label htmlFor="season">Season:</label>
                <select value={activity.season} onChange={handleChange} multiple name="season">
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
                <br />
                <span style={{ color: 'red' }}>{errors.season}</span>
            </div>
            <br />
            <div>
                <label htmlFor="countries">Country:</label>
                <select name="countries" multiple value={activity.countries} onChange={handleChange}>
                    <option disabled>Select a country</option>
                    {countryList.map(country => (
                        <option key={country.id} value={country.name}>
                            {country.name}
                        </option>
                    ))}
                </select>
                <br />
                <span style={{ color: 'red' }}>{errors.countries}</span>
            </div>
            <br />
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
