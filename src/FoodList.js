import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import FoodLink from "./FoodLink"
import FoodListNav from "./FoodListNav"
import CircularProgress from "@mui/material/CircularProgress"

export default function FoodList(props) {
	return (
		<Paper sx={{ m: 3, p: 2 }}>
			<Typography align="center" variant="h3">
				Recipes
			</Typography>
			<FoodListNav
				handlePrevPage={props.handlePrevPage}
				handleNextPage={props.handleNextPage}
			/>
			<Grid container spacing={1}>
				{props.loading && (
					<Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
						<CircularProgress />
					</Grid>
				)}
				{!props.loading &&
					props.foods &&
					props.foods.map((food) => (
						<Grid item md={6}>
							<FoodLink
								food={food}
								inFavs={props.favs.some(
									(fav) => fav.recipe.uri === food.recipe.uri
								)}
								handleAddFavs={props.handleAddFavs}
							/>
						</Grid>
					))}
			</Grid>
			<FoodListNav
				handlePrevPage={props.handlePrevPage}
				handleNextPage={props.handleNextPage}
			/>
		</Paper>
	)
}
