import SaleCounter from "./SaleCounter";

const Cake = ({cake, calculateRevenue}) => {

  const displayIngredients = cake.ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>
  });

  return (
    <>
        <h2>{cake.cakeName}</h2>
        <h3>{displayIngredients}</h3>
        <p>Price: {cake.price}</p>
        <p>Rating: {cake.rating}</p>
        <SaleCounter cakePrice={cake.price} calculateRevenue={calculateRevenue}/>
    </>
  )
}

export default Cake;