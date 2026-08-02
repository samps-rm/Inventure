import "./Navbar.css";
import logo from "../../assets/logo.png";

import {
    FaSearch,
    FaUser,
    FaShoppingCart
} from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                <img src={logo} alt="Inventure Logo" />
            </div>

            <ul className="navbar-links">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Offers</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">More</a></li>
            </ul>

            <div className="navbar-icons">
                <FaSearch className="icon" />
                <FaUser className="icon" />
                <FaShoppingCart className="icon" />
            </div>

        </nav>
    );
}

export default Navbar;