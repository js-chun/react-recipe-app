import { ThemeProvider, createTheme } from "@mui/material/styles"
import FoodApp from "./FoodApp"

const theme = createTheme({
	typography: {
		fontFamily: ["'Itim', cursive"],
	},
	palette: {
		primary: {
			main: "#A6D1E6",
		},
		secondary: {
			main: "#7F5283",
		},
		text: {
			primary: "#3D3C42",
		},
	},
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<FoodApp />
		</ThemeProvider>
	)
}

export default App
