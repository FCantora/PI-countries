import { useDispatch } from "react-redux";
import { search } from "../redux/actioncreators";
import styles from './Searchbar.module.css'

export default function Searchbar() {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(search(event.target.value));
    }

    return (
        <div>
            <form className={styles.form}>
                <input className={styles.input} onChange={handleChange} type='search' id='search' placeholder='Type a country name' />
            </form>
        </div>
    )
}
