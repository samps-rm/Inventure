import "./Shop.css";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import airpods4 from "../../assets/shop/airpods4.png";
import airpodsmax from "../../assets/shop/airpodsmax.png";
import jblgo5 from "../../assets/shop/jblgo5.png";
import watch from "../../assets/shop/watch.png";
import marshall from "../../assets/shop/marshall.png";
import mic from "../../assets/shop/mic.png";
import dock from "../../assets/shop/dock.png";
import camera from "../../assets/shop/camera.png";

function Shop() {

    const products = [

        {
            id: 1,
            name: "AirPods 4",
            image: airpods4,
            price: "NPR 20,000",
            oldPrice: "NPR 25,000",
            discount: "20%",
            rating: 4
        },

        {
            id: 2,
            name: "AirPods Max 2",
            image: airpodsmax,
            price: "NPR 100,000",
            oldPrice: "NPR 123,500",
            discount: "19%",
            rating: 4.5
        },

        {
            id: 3,
            name: "JBL Go 5",
            image: jblgo5,
            price: "NPR 9,000",
            oldPrice: "",
            discount: "",
            rating: 5
        },

        {
            id: 4,
            name: "Momax 1-Wear",
            image: watch,
            price: "NPR 8,000",
            oldPrice: "NPR 9,500",
            discount: "15%",
            rating: 3
        },

        {
            id: 5,
            name: "Marshall UXBRIDGE",
            image: marshall,
            price: "NPR 34,900",
            oldPrice: "",
            discount: "",
            rating: 4
        },

        {
            id: 6,
            name: "JBL Wireless Microphone",
            image: mic,
            price: "NPR 24,500",
            oldPrice: "",
            discount: "",
            rating: 5
        },

        {
            id: 7,
            name: "Momax Q.Mag Dock",
            image: dock,
            price: "NPR 5,000",
            oldPrice: "",
            discount: "",
            rating: 4
        },

        {
            id: 8,
            name: "Momax Smart IP Camera",
            image: camera,
            price: "NPR 4,500",
            oldPrice: "NPR 6,000",
            discount: "25%",
            rating: 4
        }

    ];

    return (

        <section className="shop">

            <div className="shop-container">

                <h2 className="shop-title">SHOP</h2>

                <div className="shop-grid">

                    {products.map((product) => (

                        <div
                            className="shop-card"
                            key={product.id}
                        >

                            {product.discount && (

                                <div className="discount">

                                    {product.discount}

                                </div>

                            )}

                            <div className="image-box">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                />

                            </div>

                            <div className="content">

                                <h3 className="product-name">

                                    {product.name}

                                </h3>

                                <div className="price">

                                    <span className="current">

                                        {product.price}

                                    </span>

                                    {product.oldPrice && (

                                        <span className="old">

                                            {product.oldPrice}

                                        </span>

                                    )}

                                </div>

                                <div className="stars">

                                    {Array.from({ length: 5 }, (_, index) => {

                                        if (product.rating >= index + 1) {

                                            return <FaStar key={index} />;

                                        }

                                        if (product.rating >= index + 0.5) {

                                            return <FaStarHalfAlt key={index} />;

                                        }

                                        return <FaRegStar key={index} />;

                                    })}

                                </div>

                                <button className="cart-btn">

                                    Add to Cart

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Shop;