import { useState } from "react";

const SaleCounter = ({cakePrice, calculateRevenue}) => {

    const [cakesSold, setCakesSold] = useState(0);

    const sellCake = () => {
        const newCakesSold = cakesSold;
        setCakesSold(newCakesSold + 1);
        calculateRevenue(cakePrice);
    }

    return(
        <>
            <p>Cakes sold: {cakesSold}</p>
            <button onClick={sellCake}>Sell cake</button>
        </>
    )
}

export default SaleCounter;