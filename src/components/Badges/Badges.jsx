import "./Badges.css";

import {
    FaCalendarAlt,
    FaExchangeAlt,
    FaShippingFast,
    FaCheckCircle
} from "react-icons/fa";

function Badges(){

    return(

        <section className="badges">

            <div className="badge">

                <FaCalendarAlt/>

                <div>

                    <h3>1 Year</h3>
                    <p>Warranty</p>

                </div>

            </div>

            <div className="divider"></div>

            <div className="badge">

                <FaExchangeAlt/>

                <div>

                    <h3>10 Day</h3>
                    <p>Replacement</p>

                </div>

            </div>

            <div className="divider"></div>

            <div className="badge">

                <FaShippingFast/>

                <div>

                    <h3>Quick</h3>
                    <p>Delivery</p>

                </div>

            </div>

            <div className="divider"></div>

            <div className="badge">

                <FaCheckCircle/>

                <div>

                    <h3>Certified</h3>
                    <p>Brand</p>

                </div>

            </div>

        </section>

    );

}

export default Badges;