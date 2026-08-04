import "./ShopDropdown.css";

import earbuds from "../../assets/dropdown/earbuds.png";
import watch from "../../assets/dropdown/watch.png";
import headphone from "../../assets/dropdown/headphone.png";
import speaker from "../../assets/dropdown/speaker.png";
import powerbank from "../../assets/dropdown/powerbank.png";
import microphone from "../../assets/dropdown/microphone.png";

function ShopDropdown() {

    const categories = [

        {
            name: "Earbud",
            image: earbuds
        },

        {
            name: "Watch",
            image: watch
        },

        {
            name: "Headphone",
            image: headphone
        },

        {
            name: "Speaker",
            image: speaker
        },

        {
            name: "Powerbank",
            image: powerbank
        },

        {
            name: "Microphone",
            image: microphone
        }

    ];

    return (

        <div className="shop-dropdown">

            {categories.map((item) => (

                <div
                    className="dropdown-item"
                    key={item.name}
                >

                    <img
                        src={item.image}
                        alt={item.name}
                    />

                    <p>{item.name}</p>

                </div>

            ))}

        </div>

    );

}

export default ShopDropdown;