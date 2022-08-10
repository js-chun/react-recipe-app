import { useState, useEffect } from "react"
import FoodSearch from "./FoodSearch"
import FoodList from "./FoodList"
import Typography from "@mui/material/Typography"

function App() {
	const initial = JSON.parse(window.localStorage.getItem("fav_recipes")) || []
	const [foods, setFoods] = useState(initial)
	const [favs, setFavs] = useState(initial)
	const handleFoodSearch = (foodData) => {
		setFoods(foodData)
	}

	useEffect(() => {
		window.localStorage.setItem("fav_recipes", JSON.stringify(favs))
	}, [favs])

	const handleAddFavs = (foodData, isChecked) => {
		let newFavs = [...favs]
		if (isChecked) {
			if (!newFavs.some((fav) => fav.recipe.uri === foodData.recipe.uri)) {
				newFavs.push(foodData)
			}
		} else {
			newFavs = newFavs.filter((fav) => fav.recipe.uri !== foodData.recipe.uri)
		}
		setFavs(newFavs)
	}

	return (
		<div className="App">
			<Typography variant="h2">Simple Recipe App</Typography>
			<FoodSearch handleFoodSearch={handleFoodSearch} />
			{foods && (
				<FoodList foods={foods} favs={favs} handleAddFavs={handleAddFavs} />
			)}
		</div>
	)
}

export default App
