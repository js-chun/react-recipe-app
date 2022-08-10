import React, { useRef, useEffect } from "react"

import PropTypes from "prop-types"
import Button from "@mui/material/Button"
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Typography from "@mui/material/Typography"

import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import ListItemText from "@mui/material/ListItemText"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

export default function RecipeDialog(props) {
	const { onClose, open, food, nutFacts } = props

	const handleClose = () => {
		onClose()
	}

	const handleLinkOpen = () => {
		window.open(food.recipe.url)
	}

	const descriptionElementRef = useRef(null)
	useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [open])

	return (
		<Dialog
			onClose={handleClose}
			open={open}
			scroll="paper"
			aria-labelledby="scroll-dialog-title"
			aria-describedby="scroll-dialog-description">
			<DialogTitle id="scroll-dialog-title">{food.recipe.label}</DialogTitle>
			<DialogContent dividers={true}>
				<DialogContentText
					id="scroll-dialog-description"
					ref={descriptionElementRef}
					tabIndex={-1}>
					<Box>
						<Button onClick={handleLinkOpen} variant="contained">
							<MenuBookIcon /> &nbsp; Preparation
						</Button>
						from {food.recipe.source}
					</Box>
					<Box>
						<Typography>
							{food.recipe.ingredientLines.length} Ingredients
						</Typography>
						<List>
							{food.recipe.ingredientLines.map((ing) => (
								<ListItem>
									<ListItemText primary={ing} />
								</ListItem>
							))}
						</List>
					</Box>
					<Box>
						<Typography>Nutrition</Typography>
						<Stack direction="column" spacing={1}>
							<Paper>Calories: {Math.round(food.recipe.calories)}</Paper>
							<Paper>Servings: {food.recipe.yield}</Paper>
						</Stack>
						<TableContainer component={Paper}>
							<Table size="small" aria-label="a dense table">
								<TableHead>
									<TableRow>
										<TableCell>Nutrient</TableCell>
										<TableCell align="right">Amount</TableCell>
										<TableCell align="right">Daily</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{nutFacts.map((nutrient) => (
										<TableRow
											sx={{
												"&:last-child td, &:last-child th": { border: 0 },
											}}>
											<TableCell component="th" scope="row">
												{nutrient.label}
											</TableCell>
											<TableCell align="right">{nutrient.amount}</TableCell>
											<TableCell align="right">{nutrient.daily}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</Box>
				</DialogContentText>
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
