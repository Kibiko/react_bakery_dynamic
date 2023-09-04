import Cake from "./Cake";

const CakeList = ({ cakes , calculateRevenue}) => {
    const cakeComponents = cakes.map((cake, index) => {
        return <Cake cake={cake} key={index} calculateRevenue={calculateRevenue}/>;
    });

    return <ul>{cakeComponents}</ul>
};

export default CakeList;

