// import { Route } from "react-router-dom"
// import Form from "./Form"

import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function NavBar() {
    return (
        <div>
            <p>Esta es la Navbar</p>
            <Link to='/activities'>
                <button>Activities</button>
            </Link>
            <div>
                <Searchbar />
            </div>
        </div>
    )
}
