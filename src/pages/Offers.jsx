import Navbar from "../components/Navbar/Navbar";
import Shop from "../components/Shop/Shop";

function Offers() {
    return (
        <>
            <Navbar />

            <Shop
                offersOnly={true}
                title="OFFERS"
            />
        </>
    );
}

export default Offers;