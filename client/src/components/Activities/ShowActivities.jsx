/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// import React from 'react'
import { useEffect, useState } from "react"
import { cleanActivityFilters, getActivities } from "../../redux/actioncreators"
import { useDispatch, useSelector } from "react-redux"
import { filterActivities, orderActivities } from "../../redux/actioncreators"
import ActivitiesCards from "./ActivitiesCards"
import styles from "./ShowActivities.module.css"

function ShowActivities() {
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)
    const filteredActivities = useSelector(state => state.filteredActivities)
    const orderedActivities = useSelector(state => state.orderedActivities)

    const [filterValue, setFilterValue] = useState('');
    const [orderValue, setOrderValue] = useState('');

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const handleFilter = (event) => {
        setFilterValue(event.target.value);
        dispatch(filterActivities(event.target.value));
    }

    const handleOrder = (event) => {
        setOrderValue(event.target.value);
        dispatch(orderActivities(event.target.value));
    }

    const filteredResults = () => {
        if (filteredActivities.length > 0) {
            return filteredActivities;
        } else {
            return activities;
        }
    }

    const resetFilters = (event) => {
        dispatch(cleanActivityFilters());
        setFilterValue('');
        setOrderValue('');
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Activities</h1>
            <div className={styles.filters}>
                <select name="activities" onChange={handleFilter} className={styles.select}>
                    <option disabled>Activity name</option>
                    <option value="All">All</option>
                    {activities.map(activity => (
                        <option key={activity.id} value={activity.name}>
                            {activity.name}
                        </option>
                    ))}
                </select>
                <select name='order' value={orderValue} onChange={handleOrder} className={styles.select}>
                    <option value="" disabled>Sort by</option>
                    <optgroup label="name:">
                        <option value='Ascendent'>Name A-Z</option>
                        <option value='Descendent'>Name Z-A</option>
                    </optgroup>
                    <optgroup label="difficulty:">
                        <option value='AscendentByDifficulty'>Max - Min</option>
                        <option value='DescendentByDifficulty'>Min - Max</option>
                    </optgroup>
                    <optgroup label="duration:">
                        <option value='AscendentByDuration'>Max - Min</option>
                        <option value='DescendentByDuration'>Min - Max</option>
                    </optgroup>
                </select>
                <button className={styles.button} onClick={resetFilters}>Reset Filters</button>
            </div>
            <div>
                <ActivitiesCards activitiesToShow={filteredResults()} />

            </div>
        </div>
    )
}

export default ShowActivities