import React, { useId } from "react";
import { useCategories, useFilters } from "../hooks";
import Select from "./Select";

function Filters() {
	const { categories } = useCategories();
	const { filters, setFilters } = useFilters();
	const [minPrice, setMinPrice] = React.useState(filters.minPrice);

	function handleOnCategoryFilter(value) {
		setFilters({ ...filters, category: value });
	}
	function handleOnChangePrice({ target }) {
		setFilters({ ...filters, minPrice: target.value });
		setMinPrice(target.value);
	}
	return (
		<>
			<Select items={categories} onSelect={handleOnCategoryFilter} />
			<input type="range" min="0" max="1000" onChange={handleOnChangePrice} />
			{minPrice}
		</>
	);
}

export default Filters;
