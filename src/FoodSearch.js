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
import Button from "@mui/material/Button"
import ClearIcon from "@mui/icons-material/Clear"

export default function FoodSearch(props) {
	const [query, setQuery] = useState("")
	const [filters, setFilters] = useState({
		mealType: [],
		dishType: [],
		cuisineType: [],
	})

	const modifyUrl = (value, filters) => {
		let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}&q=`
		url += value
		for (let fType in filters) {
			filters[fType].forEach((filter) => {
				url += `&${fType}=${filter.replace(" ", "%20")}`
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
		props.handleFoodSearch(result.data, url)
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
		//filter change with favorites to be included
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
		if (query) {
			modifyUrl(query, newObject)
		}
	}

	const handleReset = () => {
		setQuery("")
		setFilters({
			mealType: [],
			dishType: [],
			cuisineType: [],
		})
		props.resetFoods()
	}

	return (
		<div>
			<Paper
				component="div"
				sx={{ m: 3, p: 2, display: "flex", justifyContent: "space-between" }}>
				<TextField
					sx={{ width: "80%" }}
					value={query}
					onChange={handleQueryChange}
					label="Keywords"
					variant="standard"
				/>
				<Button
					sx={{ width: "50px", height: "50px" }}
					variant="contained"
					onClick={handleReset}>
					<ClearIcon />
				</Button>
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
							filters={filters}
							filterType="mealType"
							handleFilterChange={handleFilterChange}
						/>
						<FoodFilters
							filters={filters}
							filterType="cuisineType"
							handleFilterChange={handleFilterChange}
						/>
						<FoodFilters
							filters={filters}
							filterType="dishType"
							handleFilterChange={handleFilterChange}
						/>
					</AccordionDetails>
				</Accordion>
			</Paper>
		</div>
	)
}
