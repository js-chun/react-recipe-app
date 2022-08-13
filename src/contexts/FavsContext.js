import React, { createContext, useEffect, useState } from "react"

export const FavsContext = createContext()

export function FavsProvider(props) {
	const [favs, setFavs] = useState(() => {
		let val
		try {
			val = JSON.parse(window.localStorage.getItem("fav_recipes"))
		} catch (e) {
			val = []
		}
		return val
	})
	const [showFavs, setShowFavs] = useState(true)

	const setShowingFavs = (isShowingFavs) => {
		setShowFavs(isShowingFavs)
	}

	const updateFavs = (foodData, isFavorite) => {
		let newFavs = [...favs]
		if (isFavorite) {
			if (!newFavs.some((fav) => fav.recipe.uri === foodData.recipe.uri)) {
				newFavs.push(foodData)
			}
		} else {
			newFavs = newFavs.filter((fav) => fav.recipe.uri !== foodData.recipe.uri)
		}
		setFavs(newFavs)
	}

	useEffect(() => {
		window.localStorage.setItem("fav_recipes", JSON.stringify(favs))
	}, [favs])

	return (
		<FavsContext.Provider
			value={{ favs, showFavs, setShowingFavs, updateFavs }}>
			{props.children}
		</FavsContext.Provider>
	)
}
