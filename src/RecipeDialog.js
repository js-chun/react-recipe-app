import React from "react"

import PropTypes from "prop-types"
import Button from "@mui/material/Button"
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import Typography from "@mui/material/Typography"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import ListItemText from "@mui/material/ListItemText"
import NutritionTable from "./NutritionTable"
import { styled } from "@mui/material/styles"

const Item = styled(Paper)(({ theme }) => ({
	width: "35%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	backgroundColor: "#7F5283",
	color: "white",
}))

export default function RecipeDialog(props) {
	const { onClose, open, food, nutFacts } = props

	const handleClose = () => {
		onClose()
	}

	const handleLinkOpen = () => {
		window.open(food.recipe.url)
	}

	return (
		<Dialog
			maxWidth="xs"
			fullWidth={true}
			onClose={handleClose}
			open={open}
			scroll="paper"
			aria-labelledby="scroll-dialog-title"
			aria-describedby="scroll-dialog-description">
			<DialogTitle id="scroll-dialog-title">{food.recipe.label}</DialogTitle>
			<DialogContent dividers={true}>
				<Box
					my={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Button onClick={handleLinkOpen} variant="contained">
						<MenuBookIcon /> &nbsp; Preparation
					</Button>
					<Typography variant="h6">from {food.recipe.source}</Typography>
				</Box>
				<Box
					my={2}
					sx={{
						backgroundColor: "#7F5283",
						color: "white",
						borderRadius: "1.5rem",
					}}>
					<Typography variant="h6" align="center">
						{food.recipe.ingredientLines.length} INGREDIENTS
					</Typography>
					<List dense={true}>
						{food.recipe.ingredientLines.map((ing) => (
							<ListItem>
								<ListItemText primary={ing} />
							</ListItem>
						))}
					</List>
				</Box>
				<Typography variant="h6" align="center">
					NUTRITION
				</Typography>
				<Stack direction="row" my={2} spacing={1} justifyContent="center">
					<Item>
						<Typography>{Math.round(food.recipe.calories)}</Typography>
						<Typography>TOTAL CALORIES</Typography>
					</Item>
					<Item>
						<Typography>{food.recipe.yield}</Typography>
						<Typography>SERVINGS</Typography>
					</Item>
				</Stack>
				<NutritionTable food={food.recipe} nutrients={nutFacts} />
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Close</Button>
			</DialogActions>
		</Dialog>
	)
}

RecipeDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
}
