/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "./Card"
import Pagination from "./Pagination"
import styles from "./Cards.module.css"

const Cards = ({ countries }) => {
    const { currentPage, currentItems, nextPage, prevPage, goToPage, resetPage, totalPage } = Pagination(countries, 10)

    const handleClick = (event) => {
        goToPage(event.target.value);
    }

    return (
        <div>
            <div className={styles.cards}>
                {
                    currentItems.map((country) => (
                        <Card
                            key={country.id}
                            id={country.id}
                            flag={country.flag}
                            name={country.name}
                            continent={country.continent}
                        //    className = {styles.card}
                        />
                    )
                    )
                }
                </div>
                <div className={styles.pagination}>
                    <button className={styles.button} onClick={resetPage}>Reset</button>
                    <button className={styles.button} onClick={prevPage}>Prev</button>
                    <span className={styles.text}>Page {currentPage} of {totalPage}</span>
                    <button className={styles.button} onClick={nextPage}>Next</button>
                    <input className={styles.input} onChange={handleClick} type="number" min="1" max={totalPage} placeholder="Go to" />
                </div>
        </div>
    )
}

export default Cards