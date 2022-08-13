import React, { useContext } from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import FoodLink from "./FoodLink"
import FoodListNav from "./FoodListNav"
import CircularProgress from "@mui/material/CircularProgress"
import { FavsContext } from "./contexts/FavsContext"

export default function FoodList(props) {
	const { favs } = useContext(FavsContext)
	const { loading, foods, updateFoods, handlePrevPage, handleNextPage } = props
	return (
		<Paper sx={{ m: 3, p: 2 }}>
			<Typography align="center" variant="h3">
				Recipes
			</Typography>
			<FoodListNav
				handlePrevPage={handlePrevPage}
				handleNextPage={handleNextPage}
			/>
			<Grid container spacing={1}>
				{loading && (
					<Grid item md={12} sx={{ display: "flex", justifyContent: "center" }}>
						<CircularProgress />
					</Grid>
				)}
				{!loading &&
					foods &&
					foods.map((food) => (
						<Grid item md={6}>
							<FoodLink
								food={food}
								foods={foods}
								updateFoods={updateFoods}
								inFavs={favs.some((fav) => fav.recipe.uri === food.recipe.uri)}
							/>
						</Grid>
					))}
			</Grid>
			<FoodListNav
				handlePrevPage={handlePrevPage}
				handleNextPage={handleNextPage}
			/>
		</Paper>
	)
}
