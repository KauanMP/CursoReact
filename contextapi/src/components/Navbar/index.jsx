import "./index.css"

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
        </nav>
    );
}

export default Navbar;