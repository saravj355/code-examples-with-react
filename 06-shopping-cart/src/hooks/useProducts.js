import { useContext, useEffect, useState } from "react";
import { getProducts } from "../services/products";
import { FiltersContext } from "../context/FiltersContext";

export default function useProducts({ filters }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then((products) => {
			setProducts(products);
		});
	}, []);

	const filteredProducts =
		products &&
		products.filter((product) => {
			const categoryCondition =
				filters.category !== "all"
					? product.category === filters.category
					: true;

			return product.price >= filters.minPrice && categoryCondition;
		});

	return { products: filteredProducts };
}
