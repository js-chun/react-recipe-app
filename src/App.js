import { useState } from "react"
import FoodSearch from "./FoodSearch"
import FoodList from "./FoodList"
import Typography from "@mui/material/Typography"

function App() {
	const [foods, setFoods] = useState("")
	const handleFoodSearch = (foodData) => {
		setFoods(foodData)
	}
	return (
		<div className="App">
			<Typography variant="h2">Simple Recipe App</Typography>
			<FoodSearch handleFoodSearch={handleFoodSearch} />
			<FoodList foods={foods} />
		</div>
	)
}

export default App
