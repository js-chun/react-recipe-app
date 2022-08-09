import React, { useState, useCallback } from "react"
import FoodFilters from "./FoodFilters"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import debounce from "lodash.debounce"
import axios from "axios"

export default function FoodSearch(props) {
	const [query, setQuery] = useState("")
	const [filters, setFilters] = useState("")
	let url

	const searchFood = async () => {
		const result = await axios.get(url).catch((e) => {
			console.log(e)
		})
		props.handleFoodSearch(result.data.hits)
	}

	const debounceQuery = useCallback(
		debounce((value, filters) => {
			if (value) {
				url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&q=`
				url += value

				for (let fType in filters) {
					filters[fType].forEach((filter) => {
						url += `&${fType}=${filter}`
					})
				}
				searchFood()
			}
		}, 500),
		[]
	)

	const handleQueryChange = (evt) => {
		setQuery(evt.target.value)
		debounceQuery(evt.target.value, filters)
	}

	const handleFilterChange = (filterType, value, isChecked) => {
		const newObject = { ...filters }
		if (isChecked) {
			if (!newObject[filterType]) newObject[filterType] = []
			if (!newObject[filterType].includes(value))
				newObject[filterType].push(value)
		} else {
			newObject[filterType] = newObject[filterType].filter(
				(filter) => filter !== value
			)
		}
		setFilters(newObject)
	}

	return (
		<div>
			<Paper component="div" sx={{ m: 3, p: 2 }}>
				<TextField
					sx={{ width: "100%" }}
					value={query}
					onChange={handleQueryChange}
					label="Keywords"
					variant="standard"
				/>
			</Paper>
			<FoodFilters
				filterType="mealType"
				handleFilterChange={handleFilterChange}
			/>
			<FoodFilters
				filterType="cuisineType"
				handleFilterChange={handleFilterChange}
			/>
			<FoodFilters
				filterType="dishType"
				handleFilterChange={handleFilterChange}
			/>
		</div>
	)
}
