import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"

export default function FoodListNav() {
	return (
		<Box>
			<Button variant="contained">
				<NavigateBeforeIcon />
			</Button>
			<Button variant="contained">
				<NavigateNextIcon />
			</Button>
		</Box>
	)
}
