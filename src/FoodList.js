import React from "react"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import FoodLink from "./FoodLink"

export default function FoodList(props) {
	return (
		<Paper sx={{ m: 3, p: 2 }}>
			<Typography variant="h3">Recipes</Typography>
			<Grid container spacing={1}>
				{props.foods &&
					props.foods.map((food) => (
						<Grid md={6}>
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
		</Paper>
	)
}

const food = {
	recipe: {
		uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_be3ba087e212f13672b553ecfa876333",
		label: "Baked Chicken",
		image:
			"https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIDYpvLNclKeeC%2F%2Fx1W%2BTyItTiQ5x13GPbh8JbPfZhnyDAiAH2%2BmPnjD0hPH6slq4ZEchPRt7BfLZmnSLzmReyT10YyrSBAg0EAAaDDE4NzAxNzE1MDk4NiIMSCZWYgOB8kDwqqDYKq8ECZC0Sy2aAV%2BCIuMeZEzNbwiWVx5SJynTyGSCMcc9s2G8fUtbvnlKNTKQdA9B%2BQT8pDkfh3VgigosiS34ZgLuRhCf%2F4VQsyCtdF3ivwE8ltgkNgnnKmm%2BLS%2FzitcKfLxgLmcNqkC6geBzKH19H3ScBqeu0290EQJ0NLs7Q0yVQds56zWFD5CwnuB2xisBjE8J9IjORQIDCNmrU09qpT0s8UfA6u3C6sMQFovDRXOiVTcMloYYqXOgI2U5gWmxsDwIQSsb%2F%2FAkaWG6OmVyvqDw2XizM8IJbVe0QnSRWhhpsnxWnVVs0qhsoI4W2NtRQxRrAYY9bmhTXmM6yYXjty2R2HEqesWLXBnzy2Z%2BByF2Il%2B6IHZhxmZj0yuKIElJreT4U3U2NJu9FI4LAIpnA4bvHOvWjk8CeBSqtzhK0Y4K47OvxG7vqJTKnP4jnOjiISu9IyzCa3qc5trTPUaEhaj4LLO9%2FCtwDTrQMzSZ9o9stXC7ApF7gYaJCoDwm8vE1K3JPLMvP4g8gEsOuyo0PUdp%2BsOvk1L3oL%2BdlWPosOr3uiOgYvSYnx6NSzdqW7EK%2BgYdE4tWI5YtJK%2Fjmos7HnrJ5jd%2BucnEFbHfm6620WgLadgu6XHUMbJg4IznsdIWKhqcy1TZa7S15cYIiux%2FIXbnNmGWU379l8F60I338H%2BH5S53D6sCks0HVt%2BHp8E60rAQk%2Fmzt9czdR8u2P49ZQNSVrhTiM4tH0c3dmMQihU49TCJ2sqXBjqqAX8rjsh%2Btai7D6iaGE7gu5VO%2FKoCqliMVoiOiDSJgBk%2BLw%2BO7omMG1uMF0o5JTO5wyHx0MDudwQ0DNlNsSr%2Fdk84fYAuo8w0I%2BinXdIiHnpCZJWJfJcRVrJuFQtnLdKccx3J0qo09vwQMDEDdUrff2gspjpuoA37rEQlL9no8F%2FuCgyDcUkg%2BiBINyaor4kNol75ur7sl0WhNYak8S7bR5M4KeOONTmcyMh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220809T195143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBH35MRT3%2F20220809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4900818e2556a24867baa842983fda4a10cfc1fbe9795565e0bf493b71a7276",
		images: {
			THUMBNAIL: {
				url: "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIDYpvLNclKeeC%2F%2Fx1W%2BTyItTiQ5x13GPbh8JbPfZhnyDAiAH2%2BmPnjD0hPH6slq4ZEchPRt7BfLZmnSLzmReyT10YyrSBAg0EAAaDDE4NzAxNzE1MDk4NiIMSCZWYgOB8kDwqqDYKq8ECZC0Sy2aAV%2BCIuMeZEzNbwiWVx5SJynTyGSCMcc9s2G8fUtbvnlKNTKQdA9B%2BQT8pDkfh3VgigosiS34ZgLuRhCf%2F4VQsyCtdF3ivwE8ltgkNgnnKmm%2BLS%2FzitcKfLxgLmcNqkC6geBzKH19H3ScBqeu0290EQJ0NLs7Q0yVQds56zWFD5CwnuB2xisBjE8J9IjORQIDCNmrU09qpT0s8UfA6u3C6sMQFovDRXOiVTcMloYYqXOgI2U5gWmxsDwIQSsb%2F%2FAkaWG6OmVyvqDw2XizM8IJbVe0QnSRWhhpsnxWnVVs0qhsoI4W2NtRQxRrAYY9bmhTXmM6yYXjty2R2HEqesWLXBnzy2Z%2BByF2Il%2B6IHZhxmZj0yuKIElJreT4U3U2NJu9FI4LAIpnA4bvHOvWjk8CeBSqtzhK0Y4K47OvxG7vqJTKnP4jnOjiISu9IyzCa3qc5trTPUaEhaj4LLO9%2FCtwDTrQMzSZ9o9stXC7ApF7gYaJCoDwm8vE1K3JPLMvP4g8gEsOuyo0PUdp%2BsOvk1L3oL%2BdlWPosOr3uiOgYvSYnx6NSzdqW7EK%2BgYdE4tWI5YtJK%2Fjmos7HnrJ5jd%2BucnEFbHfm6620WgLadgu6XHUMbJg4IznsdIWKhqcy1TZa7S15cYIiux%2FIXbnNmGWU379l8F60I338H%2BH5S53D6sCks0HVt%2BHp8E60rAQk%2Fmzt9czdR8u2P49ZQNSVrhTiM4tH0c3dmMQihU49TCJ2sqXBjqqAX8rjsh%2Btai7D6iaGE7gu5VO%2FKoCqliMVoiOiDSJgBk%2BLw%2BO7omMG1uMF0o5JTO5wyHx0MDudwQ0DNlNsSr%2Fdk84fYAuo8w0I%2BinXdIiHnpCZJWJfJcRVrJuFQtnLdKccx3J0qo09vwQMDEDdUrff2gspjpuoA37rEQlL9no8F%2FuCgyDcUkg%2BiBINyaor4kNol75ur7sl0WhNYak8S7bR5M4KeOONTmcyMh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220809T195143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBH35MRT3%2F20220809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5fd67c35913a6d5c124c9c7b5379f67c1eea3cb491178e54a34580600ac85005",
				width: 100,
				height: 100,
			},
			SMALL: {
				url: "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIDYpvLNclKeeC%2F%2Fx1W%2BTyItTiQ5x13GPbh8JbPfZhnyDAiAH2%2BmPnjD0hPH6slq4ZEchPRt7BfLZmnSLzmReyT10YyrSBAg0EAAaDDE4NzAxNzE1MDk4NiIMSCZWYgOB8kDwqqDYKq8ECZC0Sy2aAV%2BCIuMeZEzNbwiWVx5SJynTyGSCMcc9s2G8fUtbvnlKNTKQdA9B%2BQT8pDkfh3VgigosiS34ZgLuRhCf%2F4VQsyCtdF3ivwE8ltgkNgnnKmm%2BLS%2FzitcKfLxgLmcNqkC6geBzKH19H3ScBqeu0290EQJ0NLs7Q0yVQds56zWFD5CwnuB2xisBjE8J9IjORQIDCNmrU09qpT0s8UfA6u3C6sMQFovDRXOiVTcMloYYqXOgI2U5gWmxsDwIQSsb%2F%2FAkaWG6OmVyvqDw2XizM8IJbVe0QnSRWhhpsnxWnVVs0qhsoI4W2NtRQxRrAYY9bmhTXmM6yYXjty2R2HEqesWLXBnzy2Z%2BByF2Il%2B6IHZhxmZj0yuKIElJreT4U3U2NJu9FI4LAIpnA4bvHOvWjk8CeBSqtzhK0Y4K47OvxG7vqJTKnP4jnOjiISu9IyzCa3qc5trTPUaEhaj4LLO9%2FCtwDTrQMzSZ9o9stXC7ApF7gYaJCoDwm8vE1K3JPLMvP4g8gEsOuyo0PUdp%2BsOvk1L3oL%2BdlWPosOr3uiOgYvSYnx6NSzdqW7EK%2BgYdE4tWI5YtJK%2Fjmos7HnrJ5jd%2BucnEFbHfm6620WgLadgu6XHUMbJg4IznsdIWKhqcy1TZa7S15cYIiux%2FIXbnNmGWU379l8F60I338H%2BH5S53D6sCks0HVt%2BHp8E60rAQk%2Fmzt9czdR8u2P49ZQNSVrhTiM4tH0c3dmMQihU49TCJ2sqXBjqqAX8rjsh%2Btai7D6iaGE7gu5VO%2FKoCqliMVoiOiDSJgBk%2BLw%2BO7omMG1uMF0o5JTO5wyHx0MDudwQ0DNlNsSr%2Fdk84fYAuo8w0I%2BinXdIiHnpCZJWJfJcRVrJuFQtnLdKccx3J0qo09vwQMDEDdUrff2gspjpuoA37rEQlL9no8F%2FuCgyDcUkg%2BiBINyaor4kNol75ur7sl0WhNYak8S7bR5M4KeOONTmcyMh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220809T195143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBH35MRT3%2F20220809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ac357571ba5b71472f9311837b4e482906ea61a07497042b96350c45faf235b7",
				width: 200,
				height: 200,
			},
			REGULAR: {
				url: "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIDYpvLNclKeeC%2F%2Fx1W%2BTyItTiQ5x13GPbh8JbPfZhnyDAiAH2%2BmPnjD0hPH6slq4ZEchPRt7BfLZmnSLzmReyT10YyrSBAg0EAAaDDE4NzAxNzE1MDk4NiIMSCZWYgOB8kDwqqDYKq8ECZC0Sy2aAV%2BCIuMeZEzNbwiWVx5SJynTyGSCMcc9s2G8fUtbvnlKNTKQdA9B%2BQT8pDkfh3VgigosiS34ZgLuRhCf%2F4VQsyCtdF3ivwE8ltgkNgnnKmm%2BLS%2FzitcKfLxgLmcNqkC6geBzKH19H3ScBqeu0290EQJ0NLs7Q0yVQds56zWFD5CwnuB2xisBjE8J9IjORQIDCNmrU09qpT0s8UfA6u3C6sMQFovDRXOiVTcMloYYqXOgI2U5gWmxsDwIQSsb%2F%2FAkaWG6OmVyvqDw2XizM8IJbVe0QnSRWhhpsnxWnVVs0qhsoI4W2NtRQxRrAYY9bmhTXmM6yYXjty2R2HEqesWLXBnzy2Z%2BByF2Il%2B6IHZhxmZj0yuKIElJreT4U3U2NJu9FI4LAIpnA4bvHOvWjk8CeBSqtzhK0Y4K47OvxG7vqJTKnP4jnOjiISu9IyzCa3qc5trTPUaEhaj4LLO9%2FCtwDTrQMzSZ9o9stXC7ApF7gYaJCoDwm8vE1K3JPLMvP4g8gEsOuyo0PUdp%2BsOvk1L3oL%2BdlWPosOr3uiOgYvSYnx6NSzdqW7EK%2BgYdE4tWI5YtJK%2Fjmos7HnrJ5jd%2BucnEFbHfm6620WgLadgu6XHUMbJg4IznsdIWKhqcy1TZa7S15cYIiux%2FIXbnNmGWU379l8F60I338H%2BH5S53D6sCks0HVt%2BHp8E60rAQk%2Fmzt9czdR8u2P49ZQNSVrhTiM4tH0c3dmMQihU49TCJ2sqXBjqqAX8rjsh%2Btai7D6iaGE7gu5VO%2FKoCqliMVoiOiDSJgBk%2BLw%2BO7omMG1uMF0o5JTO5wyHx0MDudwQ0DNlNsSr%2Fdk84fYAuo8w0I%2BinXdIiHnpCZJWJfJcRVrJuFQtnLdKccx3J0qo09vwQMDEDdUrff2gspjpuoA37rEQlL9no8F%2FuCgyDcUkg%2BiBINyaor4kNol75ur7sl0WhNYak8S7bR5M4KeOONTmcyMh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220809T195143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBH35MRT3%2F20220809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4900818e2556a24867baa842983fda4a10cfc1fbe9795565e0bf493b71a7276",
				width: 300,
				height: 300,
			},
			LARGE: {
				url: "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIDYpvLNclKeeC%2F%2Fx1W%2BTyItTiQ5x13GPbh8JbPfZhnyDAiAH2%2BmPnjD0hPH6slq4ZEchPRt7BfLZmnSLzmReyT10YyrSBAg0EAAaDDE4NzAxNzE1MDk4NiIMSCZWYgOB8kDwqqDYKq8ECZC0Sy2aAV%2BCIuMeZEzNbwiWVx5SJynTyGSCMcc9s2G8fUtbvnlKNTKQdA9B%2BQT8pDkfh3VgigosiS34ZgLuRhCf%2F4VQsyCtdF3ivwE8ltgkNgnnKmm%2BLS%2FzitcKfLxgLmcNqkC6geBzKH19H3ScBqeu0290EQJ0NLs7Q0yVQds56zWFD5CwnuB2xisBjE8J9IjORQIDCNmrU09qpT0s8UfA6u3C6sMQFovDRXOiVTcMloYYqXOgI2U5gWmxsDwIQSsb%2F%2FAkaWG6OmVyvqDw2XizM8IJbVe0QnSRWhhpsnxWnVVs0qhsoI4W2NtRQxRrAYY9bmhTXmM6yYXjty2R2HEqesWLXBnzy2Z%2BByF2Il%2B6IHZhxmZj0yuKIElJreT4U3U2NJu9FI4LAIpnA4bvHOvWjk8CeBSqtzhK0Y4K47OvxG7vqJTKnP4jnOjiISu9IyzCa3qc5trTPUaEhaj4LLO9%2FCtwDTrQMzSZ9o9stXC7ApF7gYaJCoDwm8vE1K3JPLMvP4g8gEsOuyo0PUdp%2BsOvk1L3oL%2BdlWPosOr3uiOgYvSYnx6NSzdqW7EK%2BgYdE4tWI5YtJK%2Fjmos7HnrJ5jd%2BucnEFbHfm6620WgLadgu6XHUMbJg4IznsdIWKhqcy1TZa7S15cYIiux%2FIXbnNmGWU379l8F60I338H%2BH5S53D6sCks0HVt%2BHp8E60rAQk%2Fmzt9czdR8u2P49ZQNSVrhTiM4tH0c3dmMQihU49TCJ2sqXBjqqAX8rjsh%2Btai7D6iaGE7gu5VO%2FKoCqliMVoiOiDSJgBk%2BLw%2BO7omMG1uMF0o5JTO5wyHx0MDudwQ0DNlNsSr%2Fdk84fYAuo8w0I%2BinXdIiHnpCZJWJfJcRVrJuFQtnLdKccx3J0qo09vwQMDEDdUrff2gspjpuoA37rEQlL9no8F%2FuCgyDcUkg%2BiBINyaor4kNol75ur7sl0WhNYak8S7bR5M4KeOONTmcyMh%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220809T195143Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBH35MRT3%2F20220809%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70e83e38d295fb5ddd70ec6778cde7dde35a78129c0333316edaac7cbf14decc",
				width: 600,
				height: 600,
			},
		},
		source: "Martha Stewart",
		url: "http://www.marthastewart.com/318981/baked-chicken",
		shareAs:
			"http://www.edamam.com/recipe/baked-chicken-be3ba087e212f13672b553ecfa876333/chicken",
		yield: 4,
		dietLabels: ["Low-Carb"],
		healthLabels: [
			"Sugar-Conscious",
			"Keto-Friendly",
			"Paleo",
			"Mediterranean",
			"Dairy-Free",
			"Gluten-Free",
			"Wheat-Free",
			"Egg-Free",
			"Peanut-Free",
			"Tree-Nut-Free",
			"Soy-Free",
			"Fish-Free",
			"Shellfish-Free",
			"Pork-Free",
			"Red-Meat-Free",
			"Crustacean-Free",
			"Celery-Free",
			"Mustard-Free",
			"Sesame-Free",
			"Lupine-Free",
			"Mollusk-Free",
			"Alcohol-Free",
			"No oil added",
			"Sulfite-Free",
			"FODMAP-Free",
			"Kosher",
		],
		cautions: [],
		ingredientLines: [
			"6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
			"1/2 teaspoon coarse salt",
			"1/2 teaspoon Mrs. Dash seasoning",
			"1/4 teaspoon freshly ground black pepper",
		],
		ingredients: [
			{
				text: "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
				quantity: 6,
				measure: "half",
				food: "chicken breast",
				weight: 522,
				foodCategory: "Poultry",
				foodId: "food_a9hdg97b1sqqs5aj1al75bbo5iyt",
				image:
					"https://www.edamam.com/food-img/093/093749f4c93e448119fc81976d2c3067.jpg",
			},
			{
				text: "1/2 teaspoon coarse salt",
				quantity: 0.5,
				measure: "teaspoon",
				food: "coarse salt",
				weight: 2.4270833334564377,
				foodCategory: "Condiments and sauces",
				foodId: "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
				image:
					"https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
			},
			{
				text: "1/2 teaspoon Mrs. Dash seasoning",
				quantity: 0.5,
				measure: "teaspoon",
				food: "seasoning",
				weight: 0.75,
				foodCategory: "Condiments and sauces",
				foodId: "food_aj7w3xab0epj7cbgkbkpwadysovd",
				image:
					"https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg",
			},
			{
				text: "1/4 teaspoon freshly ground black pepper",
				quantity: 0.25,
				measure: "teaspoon",
				food: "black pepper",
				weight: 0.575,
				foodCategory: "Condiments and sauces",
				foodId: "food_b6ywzluaaxv02wad7s1r9ag4py89",
				image:
					"https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg",
			},
		],
		calories: 901.58575,
		totalWeight: 525.6156350198669,
		totalTime: 0,
		cuisineType: ["american"],
		mealType: ["lunch/dinner"],
		dishType: ["main course"],
		totalNutrients: {
			ENERC_KCAL: {
				label: "Energy",
				quantity: 901.58575,
				unit: "kcal",
			},
			FAT: {
				label: "Fat",
				quantity: 48.36022,
				unit: "g",
			},
			FASAT: {
				label: "Saturated",
				quantity: 13.917879,
				unit: "g",
			},
			FATRN: {
				label: "Trans",
				quantity: 0.5480999999999999,
				unit: "g",
			},
			FAMS: {
				label: "Monounsaturated",
				quantity: 19.953694249999998,
				unit: "g",
			},
			FAPU: {
				label: "Polyunsaturated",
				quantity: 10.251458499999998,
				unit: "g",
			},
			CHOCDF: {
				label: "Carbs",
				quantity: 0.8596375,
				unit: "g",
			},
			"CHOCDF.net": {
				label: "Carbohydrates (net)",
				quantity: 0,
				unit: "g",
			},
			FIBTG: {
				label: "Fiber",
				quantity: 0.230225,
				unit: "g",
			},
			SUGAR: {
				label: "Sugars",
				quantity: 0.01718,
				unit: "g",
			},
			"SUGAR.added": {
				label: "Sugars, added",
				quantity: 0,
				unit: "g",
			},
			PROCNT: {
				label: "Protein",
				quantity: 108.9686675,
				unit: "g",
			},
			CHOLE: {
				label: "Cholesterol",
				quantity: 334.08,
				unit: "mg",
			},
			NA: {
				label: "Sodium",
				quantity: 1216.981821,
				unit: "mg",
			},
			CA: {
				label: "Calcium",
				quantity: 67.98700240476805,
				unit: "mg",
			},
			MG: {
				label: "Magnesium",
				quantity: 133.18615635019867,
				unit: "mg",
			},
			K: {
				label: "Potassium",
				quantity: 1161.3550008015893,
				unit: "mg",
			},
			FE: {
				label: "Iron",
				quantity: 4.19094159556556,
				unit: "mg",
			},
			ZN: {
				label: "Zinc",
				quantity: 4.208683135019868,
				unit: "mg",
			},
			P: {
				label: "Phosphorus",
				quantity: 910.471,
				unit: "mg",
			},
			VITA_RAE: {
				label: "Vitamin A",
				quantity: 126.42524999999999,
				unit: "µg",
			},
			VITC: {
				label: "Vitamin C",
				quantity: 0.09,
				unit: "mg",
			},
			THIA: {
				label: "Thiamin (B1)",
				quantity: 0.33146099999999995,
				unit: "mg",
			},
			RIBF: {
				label: "Riboflavin (B2)",
				quantity: 0.4461675,
				unit: "mg",
			},
			NIA: {
				label: "Niacin (B3)",
				quantity: 51.74860724999999,
				unit: "mg",
			},
			VITB6A: {
				label: "Vitamin B6",
				quantity: 2.77817325,
				unit: "mg",
			},
			FOLDFE: {
				label: "Folate equivalent (total)",
				quantity: 22.01275,
				unit: "µg",
			},
			FOLFD: {
				label: "Folate (food)",
				quantity: 22.01275,
				unit: "µg",
			},
			FOLAC: {
				label: "Folic acid",
				quantity: 0,
				unit: "µg",
			},
			VITB12: {
				label: "Vitamin B12",
				quantity: 1.7748,
				unit: "µg",
			},
			VITD: {
				label: "Vitamin D",
				quantity: 2.088,
				unit: "µg",
			},
			TOCPHA: {
				label: "Vitamin E",
				quantity: 1.42528,
				unit: "mg",
			},
			VITK1: {
				label: "Vitamin K",
				quantity: 6.981775,
				unit: "µg",
			},
			"Sugar.alcohol": {
				label: "Sugar alcohol",
				quantity: 0,
				unit: "g",
			},
			WATER: {
				label: "Water",
				quantity: 362.7272512700397,
				unit: "g",
			},
		},
		totalDaily: {
			ENERC_KCAL: {
				label: "Energy",
				quantity: 45.0792875,
				unit: "%",
			},
			FAT: {
				label: "Fat",
				quantity: 74.40033846153847,
				unit: "%",
			},
			FASAT: {
				label: "Saturated",
				quantity: 69.589395,
				unit: "%",
			},
			CHOCDF: {
				label: "Carbs",
				quantity: 0.28654583333333333,
				unit: "%",
			},
			FIBTG: {
				label: "Fiber",
				quantity: 0.9209,
				unit: "%",
			},
			PROCNT: {
				label: "Protein",
				quantity: 217.937335,
				unit: "%",
			},
			CHOLE: {
				label: "Cholesterol",
				quantity: 111.36,
				unit: "%",
			},
			NA: {
				label: "Sodium",
				quantity: 50.707575875,
				unit: "%",
			},
			CA: {
				label: "Calcium",
				quantity: 6.798700240476805,
				unit: "%",
			},
			MG: {
				label: "Magnesium",
				quantity: 31.71098960719016,
				unit: "%",
			},
			K: {
				label: "Potassium",
				quantity: 24.709680868118923,
				unit: "%",
			},
			FE: {
				label: "Iron",
				quantity: 23.283008864253112,
				unit: "%",
			},
			ZN: {
				label: "Zinc",
				quantity: 38.26075577290789,
				unit: "%",
			},
			P: {
				label: "Phosphorus",
				quantity: 130.06728571428573,
				unit: "%",
			},
			VITA_RAE: {
				label: "Vitamin A",
				quantity: 14.04725,
				unit: "%",
			},
			VITC: {
				label: "Vitamin C",
				quantity: 0.1,
				unit: "%",
			},
			THIA: {
				label: "Thiamin (B1)",
				quantity: 27.62175,
				unit: "%",
			},
			RIBF: {
				label: "Riboflavin (B2)",
				quantity: 34.32057692307692,
				unit: "%",
			},
			NIA: {
				label: "Niacin (B3)",
				quantity: 323.4287953125,
				unit: "%",
			},
			VITB6A: {
				label: "Vitamin B6",
				quantity: 213.70563461538458,
				unit: "%",
			},
			FOLDFE: {
				label: "Folate equivalent (total)",
				quantity: 5.5031875,
				unit: "%",
			},
			VITB12: {
				label: "Vitamin B12",
				quantity: 73.95,
				unit: "%",
			},
			VITD: {
				label: "Vitamin D",
				quantity: 13.92,
				unit: "%",
			},
			TOCPHA: {
				label: "Vitamin E",
				quantity: 9.501866666666668,
				unit: "%",
			},
			VITK1: {
				label: "Vitamin K",
				quantity: 5.818145833333333,
				unit: "%",
			},
		},
		digest: [
			{
				label: "Fat",
				tag: "FAT",
				schemaOrgTag: "fatContent",
				total: 48.36022,
				hasRDI: true,
				daily: 74.40033846153847,
				unit: "g",
				sub: [
					{
						label: "Saturated",
						tag: "FASAT",
						schemaOrgTag: "saturatedFatContent",
						total: 13.917879,
						hasRDI: true,
						daily: 69.589395,
						unit: "g",
					},
					{
						label: "Trans",
						tag: "FATRN",
						schemaOrgTag: "transFatContent",
						total: 0.5480999999999999,
						hasRDI: false,
						daily: 0,
						unit: "g",
					},
					{
						label: "Monounsaturated",
						tag: "FAMS",
						schemaOrgTag: null,
						total: 19.953694249999998,
						hasRDI: false,
						daily: 0,
						unit: "g",
					},
					{
						label: "Polyunsaturated",
						tag: "FAPU",
						schemaOrgTag: null,
						total: 10.251458499999998,
						hasRDI: false,
						daily: 0,
						unit: "g",
					},
				],
			},
			{
				label: "Carbs",
				tag: "CHOCDF",
				schemaOrgTag: "carbohydrateContent",
				total: 0.8596375,
				hasRDI: true,
				daily: 0.28654583333333333,
				unit: "g",
				sub: [
					{
						label: "Carbs (net)",
						tag: "CHOCDF.net",
						schemaOrgTag: null,
						total: 0,
						hasRDI: false,
						daily: 0,
						unit: "g",
					},
					{
						label: "Fiber",
						tag: "FIBTG",
						schemaOrgTag: "fiberContent",
						total: 0.230225,
						hasRDI: true,
						daily: 0.9209,
						unit: "g",
					},
					{
						label: "Sugars",
						tag: "SUGAR",
						schemaOrgTag: "sugarContent",
						total: 0.01718,
						hasRDI: false,
						daily: 0,
						unit: "g",
					},
					{
						label: "Sugars, added",
						tag: "SUGAR.added",
						schemaOrgTag: null,
						total: 0,
						hasRDI: false,
						daily: 0,
						unit: "g",
					},
				],
			},
			{
				label: "Protein",
				tag: "PROCNT",
				schemaOrgTag: "proteinContent",
				total: 108.9686675,
				hasRDI: true,
				daily: 217.937335,
				unit: "g",
			},
			{
				label: "Cholesterol",
				tag: "CHOLE",
				schemaOrgTag: "cholesterolContent",
				total: 334.08,
				hasRDI: true,
				daily: 111.36,
				unit: "mg",
			},
			{
				label: "Sodium",
				tag: "NA",
				schemaOrgTag: "sodiumContent",
				total: 1216.981821,
				hasRDI: true,
				daily: 50.707575875,
				unit: "mg",
			},
			{
				label: "Calcium",
				tag: "CA",
				schemaOrgTag: null,
				total: 67.98700240476805,
				hasRDI: true,
				daily: 6.798700240476805,
				unit: "mg",
			},
			{
				label: "Magnesium",
				tag: "MG",
				schemaOrgTag: null,
				total: 133.18615635019867,
				hasRDI: true,
				daily: 31.71098960719016,
				unit: "mg",
			},
			{
				label: "Potassium",
				tag: "K",
				schemaOrgTag: null,
				total: 1161.3550008015893,
				hasRDI: true,
				daily: 24.709680868118923,
				unit: "mg",
			},
			{
				label: "Iron",
				tag: "FE",
				schemaOrgTag: null,
				total: 4.19094159556556,
				hasRDI: true,
				daily: 23.283008864253112,
				unit: "mg",
			},
			{
				label: "Zinc",
				tag: "ZN",
				schemaOrgTag: null,
				total: 4.208683135019868,
				hasRDI: true,
				daily: 38.26075577290789,
				unit: "mg",
			},
			{
				label: "Phosphorus",
				tag: "P",
				schemaOrgTag: null,
				total: 910.471,
				hasRDI: true,
				daily: 130.06728571428573,
				unit: "mg",
			},
			{
				label: "Vitamin A",
				tag: "VITA_RAE",
				schemaOrgTag: null,
				total: 126.42524999999999,
				hasRDI: true,
				daily: 14.04725,
				unit: "µg",
			},
			{
				label: "Vitamin C",
				tag: "VITC",
				schemaOrgTag: null,
				total: 0.09,
				hasRDI: true,
				daily: 0.1,
				unit: "mg",
			},
			{
				label: "Thiamin (B1)",
				tag: "THIA",
				schemaOrgTag: null,
				total: 0.33146099999999995,
				hasRDI: true,
				daily: 27.62175,
				unit: "mg",
			},
			{
				label: "Riboflavin (B2)",
				tag: "RIBF",
				schemaOrgTag: null,
				total: 0.4461675,
				hasRDI: true,
				daily: 34.32057692307692,
				unit: "mg",
			},
			{
				label: "Niacin (B3)",
				tag: "NIA",
				schemaOrgTag: null,
				total: 51.74860724999999,
				hasRDI: true,
				daily: 323.4287953125,
				unit: "mg",
			},
			{
				label: "Vitamin B6",
				tag: "VITB6A",
				schemaOrgTag: null,
				total: 2.77817325,
				hasRDI: true,
				daily: 213.70563461538458,
				unit: "mg",
			},
			{
				label: "Folate equivalent (total)",
				tag: "FOLDFE",
				schemaOrgTag: null,
				total: 22.01275,
				hasRDI: true,
				daily: 5.5031875,
				unit: "µg",
			},
			{
				label: "Folate (food)",
				tag: "FOLFD",
				schemaOrgTag: null,
				total: 22.01275,
				hasRDI: false,
				daily: 0,
				unit: "µg",
			},
			{
				label: "Folic acid",
				tag: "FOLAC",
				schemaOrgTag: null,
				total: 0,
				hasRDI: false,
				daily: 0,
				unit: "µg",
			},
			{
				label: "Vitamin B12",
				tag: "VITB12",
				schemaOrgTag: null,
				total: 1.7748,
				hasRDI: true,
				daily: 73.95,
				unit: "µg",
			},
			{
				label: "Vitamin D",
				tag: "VITD",
				schemaOrgTag: null,
				total: 2.088,
				hasRDI: true,
				daily: 13.92,
				unit: "µg",
			},
			{
				label: "Vitamin E",
				tag: "TOCPHA",
				schemaOrgTag: null,
				total: 1.42528,
				hasRDI: true,
				daily: 9.501866666666668,
				unit: "mg",
			},
			{
				label: "Vitamin K",
				tag: "VITK1",
				schemaOrgTag: null,
				total: 6.981775,
				hasRDI: true,
				daily: 5.818145833333333,
				unit: "µg",
			},
			{
				label: "Sugar alcohols",
				tag: "Sugar.alcohol",
				schemaOrgTag: null,
				total: 0,
				hasRDI: false,
				daily: 0,
				unit: "g",
			},
			{
				label: "Water",
				tag: "WATER",
				schemaOrgTag: null,
				total: 362.7272512700397,
				hasRDI: false,
				daily: 0,
				unit: "g",
			},
		],
	},
	_links: {
		self: {
			href: "https://api.edamam.com/api/recipes/v2/be3ba087e212f13672b553ecfa876333?type=public&app_id=76c3e304&app_key=38c557bfd6abee0bad685bdd627acd3d",
			title: "Self",
		},
	},
}
