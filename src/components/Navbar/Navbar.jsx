import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

import ShopDropdown from "../ShopDropdown/ShopDropdown";
import LoginModal from "../LoginModal/LoginModal";

import {
    FaSearch,
    FaUser,
    FaShoppingCart
} from "react-icons/fa";

function Navbar() {

    const [showShop, setShowShop] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {

                setShowShop(false);
                setShowMore(false);

            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    return (

        <nav className="navbar">

            <div className="navbar-logo">

                <img
                    src={logo}
                    alt="Inventure Logo"
                />

            </div>

            <ul className="navbar-links">

                <li
                    className="shop-menu"
                    ref={dropdownRef}
                >

                    <button
                        className="nav-btn"
                        onClick={() => {

                            setShowShop(!showShop);
                            setShowMore(false);

                        }}
                    >
                        Shop
                    </button>

                    {showShop && <ShopDropdown />}

                </li>

                <li>

                    <a href="#">
                        Offers
                    </a>

                </li>

                <li>

                    <a href="#">
                        Orders
                    </a>

                </li>

                <li className="more-menu">

                    <button
                        className="nav-btn"
                        onClick={() => {

                            setShowMore(!showMore);
                            setShowShop(false);

                        }}
                    >
                        More
                    </button>

                    {showMore && (

                        <div className="more-dropdown">

                            <a href="#">About Us</a>

                            <a href="#">Contact Us</a>

                            <a href="#">Blog</a>

                            <a href="#">Help / FAQ</a>

                        </div>

                    )}

                </li>

            </ul>

            <div className="navbar-icons">

                <FaSearch className="icon" />

                <FaUser
                    className="icon"
                    onClick={() => setShowLogin(true)}
                />

                <FaShoppingCart className="icon" />

            </div>

            <LoginModal
                show={showLogin}
                onClose={() => setShowLogin(false)}
            />

        </nav>

    );

}

export default Navbar;