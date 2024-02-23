import { useDispatch } from "react-redux";
import { search } from "../redux/actioncreators";

export default function Searchbar() {
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(search(event.target.value));
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} type='search' id='search' placeholder='Type a country name' />
            </form>
        </div>
    )
}
