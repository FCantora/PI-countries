/* eslint-disable react/jsx-key */
// import React from 'react'
import { useEffect } from "react"
import { getActivities } from "../redux/actioncreators"
import { useDispatch, useSelector } from "react-redux"

function ShowActivities() {
    const dispatch = useDispatch()
    const activities = useSelector(state => state.activities)

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    console.log(activities);



    return (
        <div>
            <h1>ShowActivities</h1>
            {
                activities.length === 0 ? (
                    <h3>No activities found yet</h3>
                ) : (
                    activities.map((activity) => (
                        <div key={activity.id}>
                            <h1>{activity.name}</h1>
                            <p>Difficulty: {activity.difficulty}</p>
                            <p>Duration: {activity.duration} hours</p>
                            <p>Season: {activity.season.join(", ")}</p>
                            <p>Countries: {activity.countries.join(", ")}</p>
                        </div>
                    )))
            }
        </div>
    )
}

export default ShowActivities