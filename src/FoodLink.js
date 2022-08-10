import React, { useState } from "react"
import FoodTags from "./FoodTags"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Checkbox from "@mui/material/Checkbox"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Favorite from "@mui/icons-material/Favorite"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import RiceBowlIcon from "@mui/icons-material/RiceBowl"
import KitchenIcon from "@mui/icons-material/Kitchen"
import DinnerDiningIcon from "@mui/icons-material/DinnerDining"
import ShareIcon from "@mui/icons-material/Share"
import InfoIcon from "@mui/icons-material/Info"

import RecipeDialog from "./RecipeDialog"

export default function FoodLink(props) {
	const { food } = props
	const [open, setOpen] = useState(false)

	const consolidateNutrients = (foodObj) => {
		let nutritionFacts = []
		const servings = foodObj.recipe.yield
		const totalDaily = foodObj.recipe.totalDaily
		const totalNuts = foodObj.recipe.totalNutrients
		for (let nutrient in totalDaily) {
			nutritionFacts.push({
				label: totalDaily[nutrient].label,
				amount: `${(totalNuts[nutrient].quantity / servings).toFixed(2)}${
					totalNuts[nutrient].unit
				}`,
				daily: `${(totalDaily[nutrient].quantity / servings).toFixed(2)}%`,
			})
		}
		return nutritionFacts
	}

	const handleFavorites = (evt) => {
		props.handleAddFavs(food, evt.target.checked)
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<div>
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
						<RiceBowlIcon /> &nbsp; Calories: {Math.round(food.recipe.calories)}{" "}
						({Math.round(food.recipe.calories / food.recipe.yield)} per serving)
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						<KitchenIcon />
						&nbsp; {food.recipe.ingredientLines.length} Ingredients
					</Typography>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						<DinnerDiningIcon />
						&nbsp; {food.recipe.yield} Servings
					</Typography>
					<FoodTags
						cuisineTag={food.recipe.cuisineType}
						mealTag={food.recipe.mealType}
						dishTag={food.recipe.dishType}
					/>
				</CardContent>
				<CardActions>
					<Checkbox
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
						checked={props.inFavs}
						onChange={handleFavorites}
					/>
					<IconButton>
						<ShareIcon />
					</IconButton>
					<IconButton onClick={handleClickOpen}>
						<InfoIcon />
					</IconButton>
				</CardActions>
			</Card>
			<RecipeDialog
				open={open}
				onClose={handleClose}
				food={food}
				nutFacts={consolidateNutrients(food)}
			/>
		</div>
	)
}
