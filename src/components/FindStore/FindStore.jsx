import "./FindStore.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

function FindStore() {

    return (

        <section className="find-store">

            <h2 className="store-title">
                FIND STORE
            </h2>

            <div className="store-container">

                <div className="store-box">

                    <div className="map">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.226275438221!2d85.30000634733429!3d27.65066970704996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb178ef8d128d5%3A0x2fc69c69c4dbd222!2sMagargaon%20Bus%20Park!5e1!3m2!1sen!2snp!4v1785821018379!5m2!1sen!2snp"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>

                    </div>

                    <div className="store-info">

                        <h1>Inventure Store</h1>

                        <div className="info">
                            <FaMapMarkerAlt />
                            <p>Bhainsepati, Lalitpur</p>
                        </div>

                        <div className="info">
                            <FaPhoneAlt />
                            <p>97562323232</p>
                        </div>

                        <div className="info">
                            <FaClock />
                            <p>10 AM to 8 PM</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default FindStore;