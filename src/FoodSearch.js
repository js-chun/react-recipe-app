import React, { useState, useCallback } from "react"
import FoodFilters from "./FoodFilters"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import debounce from "lodash.debounce"
import axios from "axios"
import Typography from "@mui/material/Typography"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function FoodSearch(props) {
	const [query, setQuery] = useState("")
	const [filters, setFilters] = useState("")

	const modifyUrl = (value, filters) => {
		let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&q=`
		url += value
		for (let fType in filters) {
			filters[fType].forEach((filter) => {
				url += `&${fType}=${filter}`
			})
		}
		searchFood(url)
	}

	const searchFood = async (url) => {
		const result = await axios.get(url).catch((e) => {
			console.log(e)
			return
			//error handling
		})
		props.handleFoodSearch(result.data.hits)
	}

	const debounceQuery = useCallback(
		debounce((value, filters) => {
			if (value) {
				modifyUrl(value, filters)
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
		const newValue = value.replace(" ", "%20")
		if (isChecked) {
			if (!newObject[filterType]) newObject[filterType] = []
			if (!newObject[filterType].includes(newValue))
				newObject[filterType].push(newValue)
		} else {
			newObject[filterType] = newObject[filterType].filter(
				(filter) => filter !== newValue
			)
		}
		setFilters(newObject)
		if (query) {
			modifyUrl(query, newObject)
		}
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
			<Paper component="div" sx={{ m: 3, p: 2 }}>
				<Accordion sx={{ boxShadow: "none" }}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header">
						<Typography variant="h5">Filters</Typography>
					</AccordionSummary>
					<AccordionDetails>
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
					</AccordionDetails>
				</Accordion>
			</Paper>
		</div>
	)
}
