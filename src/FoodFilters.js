import React from "react"
import { allFilters, filterNames } from "./filters"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"

export default function FoodFilters(props) {
	const { filterType } = props
	const handleFilterChange = (evt) => {
		props.handleFilterChange(
			filterType,
			evt.target.labels[0].innerText,
			evt.target.checked
		)
	}
	return (
		<Paper elevation={2} sx={{ m: 2, p: 2 }}>
			<Typography variant="h5">{filterNames[filterType]}</Typography>
			<FormGroup aria-label="position" row>
				{allFilters[filterType].map((dish) => (
					<FormControlLabel
						key={`${filterType}${dish.replace(" ", "")}`}
						checked={props.filters[filterType].includes(dish)}
						control={<Checkbox onChange={handleFilterChange} />}
						label={dish}
						labelPlacement="end"
					/>
				))}
			</FormGroup>
		</Paper>
	)
}
