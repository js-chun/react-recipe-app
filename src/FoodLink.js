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
import InfoIcon from "@mui/icons-material/Info"
import Box from "@mui/material/Box"

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
					width: "90%",
					height: "350px",
					display: "inline-block",
					m: 3,
				}}>
				<CardHeader sx={{ height: "10%" }} title={food.recipe.label} />
				<Box sx={{ display: "flex", height: "65%" }}>
					<CardMedia
						component="img"
						width="200px"
						height="100%"
						image={food.recipe.image}
						alt={food.recipe.label}
					/>
					<CardContent>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom>
							<RiceBowlIcon /> &nbsp; Calories:{" "}
							{Math.round(food.recipe.calories)} (
							{Math.round(food.recipe.calories / food.recipe.yield)} per
							serving)
						</Typography>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom>
							<KitchenIcon />
							&nbsp; {food.recipe.ingredientLines.length} Ingredients
						</Typography>
						<Typography
							sx={{ fontSize: 14 }}
							color="text.secondary"
							gutterBottom>
							<DinnerDiningIcon />
							&nbsp; {food.recipe.yield} Servings
						</Typography>
					</CardContent>
					<CardActions
						disableSpacing={true}
						sx={{
							display: "flex",
							flexDirection: "column",
						}}>
						<Checkbox
							icon={<FavoriteBorder />}
							checkedIcon={<Favorite />}
							checked={props.inFavs}
							onChange={handleFavorites}
						/>
						<IconButton onClick={handleClickOpen}>
							<InfoIcon />
						</IconButton>
					</CardActions>
				</Box>
				<FoodTags
					sx={{ height: "10%" }}
					cuisineTypes={food.recipe.cuisineType}
					mealTypes={food.recipe.mealType}
					dishTypes={food.recipe.dishType}
				/>
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
