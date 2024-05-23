import "./App.css";
import Products from "./components/products/Products";
import Header from "./components/Header";
import { useFilters, useProducts } from "./hooks";
import { CartContextProvider } from "./context/CartContext";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	const { filters } = useFilters();
	const { products } = useProducts({ filters });

	return (
		<>
			<Header />
			<CartContextProvider>
				<ShoppingCart />
				<Products products={products} />
			</CartContextProvider>
		</>
	);
}

export default App;
