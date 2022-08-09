import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"

export default function FoodLink(props) {
	const { food } = props
	return (
		<Card sx={{ maxWidth: "400px" }}>
			<CardHeader title={food.recipe.label} />
			<CardMedia
				component="img"
				height="150"
				image={food.recipe.images.THUMBNAIL.url}
				alt={food.recipe.label}
			/>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Calories: {food.recipe.calories}
				</Typography>
				<Typography variant="h5" component="div">
					Ingredients
				</Typography>
				<List dense={true}>
					{food.recipe.ingredientLines.map((ing) => (
						<ListItem>
							<ListItemText primary={ing} />
						</ListItem>
					))}
				</List>
			</CardContent>
			<CardActions></CardActions>
		</Card>
	)
}
