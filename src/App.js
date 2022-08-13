import { ThemeProvider, createTheme } from "@mui/material/styles"
import { FavsProvider } from "./contexts/FavsContext"
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
			<FavsProvider>
				<FoodApp />
			</FavsProvider>
		</ThemeProvider>
	)
}

export default App
