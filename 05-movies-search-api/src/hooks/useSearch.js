import { useCallback, useEffect, useState } from "react";
import debounce from "../services/debounce";

export default function useSearch({ onSearch }) {
	const [search, setSearch] = useState("");

	const debounceInput = useCallback(
		debounce((search) => {
			onSearch(search);
		}, 300),
		[]
	);

	useEffect(() => {
		debounceInput(search);
	}, [search]);

	const updateSearch = (search) => {
		setSearch(search);
	};
	return { search, updateSearch };
}
