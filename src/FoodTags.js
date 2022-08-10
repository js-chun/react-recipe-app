import React from "react"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

export default function FoodTags(props) {
	const { cuisineTypes, mealTypes, dishTypes } = props
	return (
		<Stack my={1} mx={1} direction="row" spacing={1} flexWrap="wrap" gap={1}>
			{cuisineTypes &&
				cuisineTypes.map((cType) => (
					<Chip
						label={cType}
						sx={{ backgroundColor: "#6886C5", color: "#3D3C42" }}
					/>
				))}
			{mealTypes &&
				mealTypes.map((mType) => (
					<Chip
						label={mType}
						sx={{ backgroundColor: "#FFACB7", color: "#3D3C42" }}
					/>
				))}
			{dishTypes &&
				dishTypes.map((dType) => (
					<Chip
						label={dType}
						sx={{ backgroundColor: "#FFE0AC", color: "#3D3C42" }}
					/>
				))}
		</Stack>
	)
}
