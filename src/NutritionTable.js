import React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"

export default function NutritionTable(props) {
	const { food, nutrients } = props
	return (
		<TableContainer component={Paper}>
			<Table size="small" aria-label="a dense table">
				<TableHead>
					<TableRow>
						<TableCell>
							Per Serving ({Math.round(food.totalWeight / food.yield)}
							g)
						</TableCell>
						<TableCell align="right">Amount</TableCell>
						<TableCell align="right">Daily</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{nutrients.map((nutrient) => (
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
	)
}
