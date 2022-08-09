import { useState } from "react"
import FoodSearch from "./FoodSearch"
import FoodList from "./FoodList"

function App() {
	const [foods, setFoods] = useState("")
	const handleFoodSearch = (foodData) => {
		setFoods(foodData)
	}
	return (
		<div className="App">
			<FoodSearch handleFoodSearch={handleFoodSearch} />
			<FoodList foods={foods} />
		</div>
	)
}

export default App
