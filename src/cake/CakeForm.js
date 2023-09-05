import { useState } from "react";

const CakeForm = ( {cakes, addNewCake, calculateAvgRating} ) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [error, setError] = useState("");

    const handleIngredients = (ingredients) => {
        let listOfIngredients = ingredients.split(",");
        for(let i = 0; i< listOfIngredients.length ; i++){
            if(listOfIngredients[i].trim() === ""){
                listOfIngredients.splice(i,1);
            }
        }
        listOfIngredients = listOfIngredients.map((item) => item.trim());
        return listOfIngredients;
    }

    const handleValidation = () => {
        let validation = true;

        if(cakes.some((cake) => cake.cakeName === cakeName)){
            validation = false;
            setError("Cake has already been added");
        }

        if(price < 0){
            validation = false;
            setError("Please enter a positive price")
        }

        if(rating > 5 || rating < 0){
            validation = false;
            setError("Please rate out of 5");
        }

        if(cakeName === "" || ingredients === "" || price === "" || rating === ""){
            validation = false;
            setError("Please fill out all fields");
        }

        return validation;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(handleValidation()){
            const newCake = {
                cakeName: cakeName,
                ingredients: handleIngredients(ingredients),
                price: price,
                rating: rating
            };

            addNewCake(newCake);
            setCakeName("");
            setIngredients("");
            setPrice("");
            setRating("");
            calculateAvgRating();
        }
    }

    return(
        <>
            <h2>Add new cake</h2>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="cakeName"
                    placeholder="Enter cake name..."
                    value={cakeName}
                    onChange={ (e) => setCakeName(e.target.value)}
                />
                <input 
                    type="text"
                    name="ingredients"
                    placeholder="Enter cake ingredients separated by commas..."
                    value={ingredients}
                    onChange={ (e) => setIngredients(e.target.value)}
                />
                <input 
                    type="number"
                    name="price"
                    placeholder="Enter cake price..."
                    value={price}
                    onChange={ (e) => setPrice(e.target.value)}
                />
                <input 
                    type="number"
                    name="number"
                    placeholder="Enter cake rating..."
                    value={rating}
                    onChange={ (e) => setRating(e.target.value)}
                />
                <input
                    type="submit"
                    value="Add cake"
                />
            </form>
        </>
    )

}

export default CakeForm;