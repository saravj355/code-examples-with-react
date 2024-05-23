import { createContext, useState } from "react";

const CartContext = createContext();
function CartContextProvider({ children }) {
	const [cart, setCart] = useState(
		localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
	);

	function addToCart(product) {
		const { id, image, title, price } = product;
		const newCart = structuredClone(cart);

		const index = newCart.findIndex(
			(currentProduct) => currentProduct.id === id
		);

		index === -1
			? newCart.push({ id, image, title, price, quantity: 1 })
			: newCart[index].quantity++;

		setCart(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
	}

	function deleteFromCart(productId) {
		const newCart = structuredClone(cart);
		const index = newCart.findIndex((product) => product.id === productId);
		newCart[index].quantity--;
		if (newCart[index].quantity === 0) newCart.splice(index, 1);
		setCart(newCart);
		localStorage.setItem("cart", JSON.stringify(newCart));
	}

	return (
		<CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
			{children}
		</CartContext.Provider>
	);
}

export { CartContext, CartContextProvider };
