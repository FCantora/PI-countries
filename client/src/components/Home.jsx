/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import Cards from "../Components/Cards"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"
import { getCountries, filter, order, cleanAll } from "../redux/actioncreators"

const Home = () => {
    const dispatch = useDispatch();
    const [filterValue, setFilterValue] = useState('');
    const [orderValue, setOrderValue] = useState('');
    const countries = useSelector(state => state.countries);
    const searchedCountries = useSelector(state => state.searchedCountries);
    const filteredCountries = useSelector(state => state.filteredCountries);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch])


    const handleFilter = (event) => {
        setFilterValue(event.target.value);
        dispatch(filter(event.target.value));
    }

    const handleOrder = (event) => {
        setOrderValue(event.target.value);
        dispatch(order(event.target.value));
    }

    const filteredResults = () => {
        if (filteredCountries.length > 0) {
            return filteredCountries;
        } else if (searchedCountries.length > 0) {
            return searchedCountries;
        } else {
            return countries;
        }
    }

    const resetFilters = (event) => {
        dispatch(cleanAll());
        setFilterValue('');
        setOrderValue('');
    }

    return (
        <div>
            <h1> Home </h1>
            <div>
                <select name='filter' value={filterValue} onChange={handleFilter}>
                    <option value="" disabled>Select Continent</option>
                    <option value='All'>All</option>
                    <option value='Africa'>Africa</option>
                    <option value='Americas'>Americas</option>
                    <option value='Antarctic'>Antarctic</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Oceania'>Oceania</option>
                </select>
                <select name='order' value={orderValue} onChange={handleOrder}>
                    <option value="" disabled>Sort by</option>
                    <optgroup label="name:">
                        <option value='Ascendent'>Name A-Z</option>
                        <option value='Descendent'>Name Z-A</option>
                    </optgroup>
                    <optgroup label="population:">
                        <option value='AscendentByPopulation'>Max - Min</option>
                        <option value='DescendentByPopulation'>Min - Max</option>
                    </optgroup>
                </select>
                <button onClick={resetFilters}>Reset Filters</button>
            </div>
            <div>
                <Cards countries={filteredResults()} />
            </div>
        </div>
    )
}

export default Home