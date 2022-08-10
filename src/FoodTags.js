import React from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

export default function FoodTags(props) {
	return (
		<Stack mt={3} direction="row" spacing={1} flexWrap="wrap" gap={1}>
			{props.cuisineTag.map((cType) => (
				<Chip label={cType} sx={{ backgroundColor: "#6886C5" }} />
			))}
			{props.mealTag.map((mType) => (
				<Chip label={mType} sx={{ backgroundColor: "#FFACB7" }} />
			))}
			{props.dishTag.map((dType) => (
				<Chip label={dType} sx={{ backgroundColor: "#FFE0AC" }} />
			))}
		</Stack>
	)
}
