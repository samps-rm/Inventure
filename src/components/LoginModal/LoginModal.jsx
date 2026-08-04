import "./LoginModal.css";

import { useEffect, useRef } from "react";

import { FcGoogle } from "react-icons/fc";

function LoginModal({ show, onClose }) {

    const modalRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                modalRef.current &&
                !modalRef.current.contains(event.target)
            ) {

                onClose();

            }

        }

        function handleEscape(event) {

            if (event.key === "Escape") {

                onClose();

            }

        }

        if (show) {

            document.addEventListener(
                "mousedown",
                handleClickOutside
            );

            document.addEventListener(
                "keydown",
                handleEscape
            );

        }

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

            document.removeEventListener(
                "keydown",
                handleEscape
            );

        };

    }, [show, onClose]);

    if (!show) return null;

    return (

        <div className="login-overlay">

            <div
                className="login-modal"
                ref={modalRef}
            >

                <h2>
                    LOG IN TO INVENTURE
                </h2>

                <input
                    type="text"
                    placeholder="Username"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <button className="login-btn">

                    Login

                </button>

                <div className="login-links">

                    <a href="#">
                        Forgot Password?
                    </a>

                    <a href="#">
                        Don't have an account? Sign Up
                    </a>

                </div>

               <div className="or-section">
    <span>OR</span>
</div>

                <button className="google-btn">

                    <FcGoogle />

                    Continue with Google

                </button>

            </div>

        </div>

    );

}

export default LoginModal;