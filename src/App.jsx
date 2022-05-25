import { useState } from "react";
import "./App.css"
import FoodBox from './components/FoodBox';
import foods from "./foods.json";
import AddFoodForm from './components/AddFoodForm';

const foodsJson = foods.slice()

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <div className = "FoodContainer">
        {foods.map((foodItem) => (
          <FoodBox key={foodItem.name} food={foodItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
