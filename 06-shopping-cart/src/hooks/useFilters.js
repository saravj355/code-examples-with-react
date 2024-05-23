import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext";

export default function useFilters() {
	const { filters, setFilters } = useContext(FiltersContext);
	return { filters, setFilters };
}
