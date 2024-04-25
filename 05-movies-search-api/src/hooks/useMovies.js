import { useState } from "react";
import { findMovies } from "../services/movies";

export default function useMovies() {
	const [movies, setMovies] = useState([]);
	const getMovies = async (search) => {
		const foundMovies = await findMovies(search);
		setMovies(foundMovies);
	};

	return { movies, getMovies };
}
