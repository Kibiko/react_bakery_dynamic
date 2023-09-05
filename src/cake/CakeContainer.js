import { useState } from "react";
import CakeList from "./CakeList.js";
import CakeForm from "./CakeForm.js";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				  price: 5,
				   rating: 4
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 5
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 3
			} 
		]		
	)

	const [revenue, setRevenue] = useState(0);

	const calculateInitialRating = (() => {
		let sum = 0;
		for (let i = 0; i<listOfCakes.length; i++){
			sum += parseInt(listOfCakes[i].rating);
		}
		return(sum/listOfCakes.length);
	})

	const [avgRating, setAvgRating] = useState(calculateInitialRating);

	let updatedCakesList = [];

	const addNewCake = (newCake) => {
		updatedCakesList = [newCake, ...listOfCakes];
		setListOfCakes(updatedCakesList);
	}

	const calculateRevenue = (price) => {
		setRevenue(revenue + parseInt(price));
	}

	const calculateAvgRating = (() => {
		let sum = 0.0;
		for (let i = 0; i<updatedCakesList.length; i++){
			sum += parseInt(updatedCakesList[i].rating);
		}
		setAvgRating(sum/updatedCakesList.length);
	})

 	return (
    <>
		<p>Overall Revenue: £{revenue}</p>
		<p>Average Rating of Cakes: {avgRating}</p>
		<CakeForm cakes={listOfCakes} addNewCake={addNewCake} calculateAvgRating={calculateAvgRating}/>
        <CakeList cakes={listOfCakes} calculateRevenue={calculateRevenue}/>
    </>
  )
}

export default CakeContainer;