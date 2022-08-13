import { useState, useContext } from "react"
import axios from "axios"
import FoodSearch from "./FoodSearch"
import FoodList from "./FoodList"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { FavsContext } from "./contexts/FavsContext"

export default function FoodApp() {
	const { favs, setShowingFavs } = useContext(FavsContext)
	const initial = JSON.parse(window.localStorage.getItem("fav_recipes")) || []
	const [foods, setFoods] = useState(initial)
	const [searchPgs, setSearchPgs] = useState({ onPage: 0, searchUrls: [] })
	const [loading, setLoading] = useState(false)

	const handleFoodSearch = (foodData, url) => {
		setLoading(true)
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
		setTimeout(() => {
			setLoading(false)
		}, 1500)
	}

	const resetFoods = () => {
		setFoods(favs)
		setShowingFavs(true)
	}

	const updateFoods = (foodsData) => {
		setFoods(foodsData)
	}

	const handlePrevPage = async () => {
		if (searchPgs.searchUrls.length > 0) {
			let updatedPages = { ...searchPgs }
			updatedPages.onPage -= 1
			if (updatedPages.onPage < 0) {
				updatedPages.onPage = 0
			}
			if (updatedPages.onPage != searchPgs.onPage) {
				setLoading(true)
				const result = await axios.get(
					updatedPages.searchUrls[updatedPages.onPage]
				)
				setFoods(result.data.hits)
				setSearchPgs(updatedPages)
				setTimeout(() => {
					setLoading(false)
				}, 1500)
			}
		}
	}

	const handleNextPage = async () => {
		if (searchPgs.searchUrls.length > 0) {
			let updatedPages = { ...searchPgs }
			let result
			updatedPages.onPage += 1
			if (updatedPages.onPage >= updatedPages.searchUrls.length) {
				updatedPages.onPage = updatedPages.searchUrls.length - 1
			}
			setLoading(true)
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
			setTimeout(() => {
				setLoading(false)
			}, 1500)
		}
	}

	return (
		<Container>
			<Typography align="center" variant="h2">
				Simple Recipe App
			</Typography>
			<FoodSearch
				foods={foods}
				handleFoodSearch={handleFoodSearch}
				resetFoods={resetFoods}
				updateFoods={updateFoods}
			/>
			{foods && (
				<FoodList
					loading={loading}
					foods={foods}
					updateFoods={updateFoods}
					handlePrevPage={handlePrevPage}
					handleNextPage={handleNextPage}
				/>
			)}
		</Container>
	)
}
