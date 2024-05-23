import { useCallback, useEffect, useState } from "react";
import { getCategories } from "../services/products";

export default function useCategories() {
	const [categories, setCategories] = useState([]);

	const findCategories = useCallback(() => {
		getCategories().then((categories) => {
			setCategories(categories);
		});
	}, []);

	useEffect(() => {
		findCategories();
	}, [findCategories]);

	return { categories };
}
