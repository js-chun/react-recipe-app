const dishTypes = [
	"alcohol cocktail",
	"biscuits and cookies",
	"bread",
	"cereals",
	"condiments and sauces",
	"desserts",
	"drinks",
	"egg",
	"ice cream and custard",
	"main course",
	"pancake",
	"pasta",
	"pastry",
	"pies and tarts",
	"pizza",
	"preps",
	"preserve",
	"salad",
	"sandwiches",
	"seafood",
	"side dish",
	"soup",
	"special occasions",
	"starter",
	"sweets",
]

const mealTypes = ["breakfast", "brunch", "lunch", "dinner", "snack", "teatime"]

const cuisineTypes = [
	"american",
	"asian",
	"british",
	"caribbean",
	"central europe",
	"chinese",
	"eastern europe",
	"french",
	"greek",
	"indian",
	"italian",
	"japanese",
	"korean",
	"kosher",
	"mediterranean",
	"mexican",
	"middle eastern",
	"nordic",
	"south american",
	"south east asian",
	"world",
]

const filters = {
	mealType: mealTypes,
	cuisineType: cuisineTypes,
	dishType: dishTypes,
}

const filterNames = {
	mealType: "Meal Type",
	cuisineType: "Cuisine Type",
	dishType: "Dish Type",
}

export { filters, filterNames }
