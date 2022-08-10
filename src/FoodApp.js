import { useState, useEffect } from "react"
import axios from "axios"
import FoodSearch from "./FoodSearch"
import FoodList from "./FoodList"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"

export default function FoodApp() {
	const initial = JSON.parse(window.localStorage.getItem("fav_recipes")) || []
	const [foods, setFoods] = useState(initial)
	const [favs, setFavs] = useState(initial)
	const [searchPgs, setSearchPgs] = useState({ onPage: 0, searchUrls: [] })

	const handleFoodSearch = (foodData, url) => {
		setFoods(foodData.hits)
		if (Object.keys(foodData._links).length !== 0) {
			setSearchPgs({
				onPage: 0,
				searchUrls: [url, foodData._links.next.href],
				hitMax: false,
			})
		} else {
			setSearchPgs({
				onPage: 0,
				searchUrls: [url],
				hitMax: true,
			})
		}
	}

	const resetFoods = () => {
		setFoods(favs)
	}

	const handlePrevPage = async () => {
		let updatedPages = { ...searchPgs }
		updatedPages.onPage -= 1
		if (updatedPages.onPage < 0) {
			updatedPages.onPage = 0
		}
		if (updatedPages.onPage != searchPgs.onPage) {
			const result = await axios.get(
				updatedPages.searchUrls[updatedPages.onPage]
			)
			setFoods(result.data.hits)
			setSearchPgs(updatedPages)
		}
	}

	const handleNextPage = async () => {
		let updatedPages = { ...searchPgs }
		let result
		updatedPages.onPage += 1
		if (updatedPages.onPage >= updatedPages.searchUrls.length) {
			updatedPages.onPage = updatedPages.searchUrls.length - 1
		}
		if (
			!updatedPages.hitMax &&
			updatedPages.onPage == updatedPages.searchUrls.length - 1
		) {
			result = await axios.get(updatedPages.searchUrls[updatedPages.onPage])
			if (Object.keys(result.data._links).length !== 0) {
				updatedPages.searchUrls.push(result.data._links.next.href)
			} else {
				updatedPages.hitMax = true
			}
		} else {
			result = await axios.get(updatedPages.searchUrls[updatedPages.onPage])
		}
		setFoods(result.data.hits)
		setSearchPgs(updatedPages)
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
				<FoodList
					foods={foods}
					favs={favs}
					handleAddFavs={handleAddFavs}
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
				/>
			)}
		</Container>
	)
}
