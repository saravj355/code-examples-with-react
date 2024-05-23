import { createContext, useState } from "react";

const FiltersContext = createContext();

function FiltersContextProvider({ children }) {
	const [filters, setFilters] = useState({ category: "all", minPrice: 0 });
	return (
		<FiltersContext.Provider value={{ filters, setFilters }}>
			{children}
		</FiltersContext.Provider>
	);
}

export { FiltersContext, FiltersContextProvider };
