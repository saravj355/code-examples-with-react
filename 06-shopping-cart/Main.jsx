import { createRoot } from "react-dom/client";
import App from "./src/App";
import { FiltersContextProvider } from "./src/context/FiltersContext";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("app"));

root.render(
	<StrictMode>
		<FiltersContextProvider>
			<App />
		</FiltersContextProvider>
	</StrictMode>
);
