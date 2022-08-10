import { useState, useEffect } from "react"
import FoodSearch from "./FoodSearch"
import FoodList from "./FoodList"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function FoodApp() {
	const initial = JSON.parse(window.localStorage.getItem("fav_recipes")) || []
	const [foods, setFoods] = useState(initial)
	const [favs, setFavs] = useState(initial)
	const [searchPgs, setSearchPgs] = useState([])

	const handleFoodSearch = (foodData, url) => {
		setFoods(foodData.hits)
		//need to set url
	}

	const resetFoods = () => {
		setFoods(favs)
	}

	const handleChangePage = (isNext) => {
		//handle page change
	}

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

	useEffect(() => {
		window.localStorage.setItem("fav_recipes", JSON.stringify(favs))
	}, [favs])

	return (
		<Container>
			<Typography variant="h2">Simple Recipe App</Typography>
			<FoodSearch handleFoodSearch={handleFoodSearch} resetFoods={resetFoods} />
			{foods && (
				<FoodList foods={foods} favs={favs} handleAddFavs={handleAddFavs} />
			)}
		</Container>
	)
}
