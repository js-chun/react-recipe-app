import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

export default function FoodListNav(props) {
	return (
		<Box m={3} sx={{ display: "flex", justifyContent: "center" }}>
			<Button sx={{ mx: 1 }} variant="contained" onClick={props.handlePrevPage}>
				<NavigateBeforeIcon />
			</Button>
			<Button sx={{ mx: 1 }} variant="contained" onClick={props.handleNextPage}>
				<NavigateNextIcon />
			</Button>
		</Box>
	)
}
