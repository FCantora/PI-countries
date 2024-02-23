/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "./Card"
import Pagination from "../components/Pagination"

const Cards = ({ countries }) => {
    const {currentPage, currentItems, nextPage, prevPage, goToPage, totalPage} = Pagination(countries, 10)

    const handleClick = (event) => {
        goToPage(event.target.value);
    }

    return (
        <div>
            <h1> Countries </h1>
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
            <div>
                <button onClick={prevPage}>Prev</button>
                <span>Page {currentPage} of {totalPage}</span>
                <button onClick={nextPage}>Next</button>
                <input onChange={handleClick} type="number" min="1" max={totalPage} placeholder="Go to"/>
            </div>
        </div>
    )
}

export default Cards