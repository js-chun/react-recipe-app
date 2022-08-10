import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

export default function FoodListNav(props) {
	return (
		<Box>
			<Button variant="contained" onClick={props.handlePrevPage}>
				<NavigateBeforeIcon />
			</Button>
			<Button variant="contained" onClick={props.handleNextPage}>
				<NavigateNextIcon />
			</Button>
		</Box>
	)
}
