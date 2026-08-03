import "./BestSellers.css";

import watch from "../../assets/products/watch.gif";
import camera from "../../assets/products/camera.gif";
import speaker from "../../assets/products/speaker.gif";
import earbuds from "../../assets/products/earbuds.gif";
import mic from "../../assets/products/mic.gif";

function BestSellers() {

    const products = [

        {
            id:1,
            image:watch,
            name:"Magnum E700"
        },

        {
            id:2,
            image:camera,
            name:"Sony Alpha 7S III"
        },

        {
            id:3,
            image:speaker,
            name:"Edifier R1280T"
        },

        {
            id:4,
            image:earbuds,
            name:"Y50 TWS Wireless"
        },

        {
            id:5,
            image:mic,
            name:"RODE NT USB"
        }

    ];

    return(

        <section className="best-sellers">

            <h2>BEST SELLERS</h2>

            <div className="products-container">

                {products.map((product)=>(
                    
                    <div
                        className="product-card"
                        key={product.id}
                    >

                        <div className="product-image">

                            <img
                                src={product.image}
                                alt={product.name}
                            />

                        </div>

                        <div className="product-name">

                            {product.name}

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default BestSellers;