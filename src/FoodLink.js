import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import RiceBowlIcon from "@mui/icons-material/RiceBowl"
import KebabDiningIcon from "@mui/icons-material/KebabDining"
import DinnerDiningIcon from "@mui/icons-material/DinnerDining"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import InfoIcon from "@mui/icons-material/Info"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

export default function FoodLink(props) {
	const { food } = props
	return (
		<Card
			sx={{
				width: "350px",
				height: "500px",
				display: "inline-block",
				m: 3,
			}}>
			<CardHeader title={food.recipe.label} />
			<CardMedia
				component="img"
				height="150"
				image={food.recipe.image}
				alt={food.recipe.label}
			/>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					<RiceBowlIcon /> &nbsp; Calories: {food.recipe.calories}
				</Typography>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					<KebabDiningIcon />
					&nbsp; {food.recipe.ingredientLines.length} Ingredients
				</Typography>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					<DinnerDiningIcon />
					&nbsp; {food.recipe.yield} Servings
				</Typography>
				<Stack direction="row" spacing={1}>
					{food.recipe.cuisineType.map((cType) => (
						<Chip label={cType} sx={{ backgroundColor: "#6886C5" }} />
					))}
					{food.recipe.mealType.map((mType) => (
						<Chip label={mType} sx={{ backgroundColor: "#FFACB7" }} />
					))}
					{food.recipe.dishType.map((dType) => (
						<Chip label={dType} sx={{ backgroundColor: "#FFE0AC" }} />
					))}
				</Stack>
			</CardContent>
			<CardActions>
				<IconButton>
					<FavoriteIcon />
				</IconButton>
				<IconButton>
					<ShareIcon />
				</IconButton>
				<IconButton>
					<InfoIcon />
				</IconButton>
			</CardActions>
		</Card>
	)
}
