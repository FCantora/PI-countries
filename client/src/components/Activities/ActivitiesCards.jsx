/* eslint-disable react/prop-types */
import ActivitiesCard from "./ActivitiesCard";
import styles from "./ActivitiesCards.module.css";

const ActivitiesCards = ({ activitiesToShow }) => {
    const activities = activitiesToShow

    return (
        <div>
            <div className={styles.container}>
                {
                    activities.length === 0 ? (
                        <h3>No activities found yet</h3>
                    ) : (
                        activities.map((activity) => (
                            <ActivitiesCard
                                id={activity.id}
                                key={activity.id}
                                activity={activity.name}
                                difficulty={activity.difficulty}
                                duration={activity.duration}
                                season={activity.season}
                                countries={activity.Countries}
                            />
                        )
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ActivitiesCards