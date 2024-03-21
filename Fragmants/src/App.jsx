import Container from "./Components/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import FoodInput from "./Components/FoodInput";
import "./App.css";
import { useState } from "react";


function App(){
  //  let foodItems = [];
  //  let foodItems = ['Dal','Green Vegetable','Roti','Salad','Milk','Protein-based'];

   let [textToShow,setTextState] = useState();

   let [foodItems, setFoodItems ] = useState(['Dal','Green Vegetable','Roti']);
 
   const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }


   
     };
  
return (
<Container> 
<h1 className="food-heading">Healthy Food</h1>


 <FoodInput handleKeyDown={onKeyDown} ></FoodInput>
 <ErrorMessage items={foodItems}></ErrorMessage>
  <FoodItems items={foodItems}></FoodItems>
</Container> 
);
}
export default App;
