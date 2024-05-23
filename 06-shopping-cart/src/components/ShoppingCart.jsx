import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ShoppingCart() {
	const { cart, deleteFromCart, addToCart } = useContext(CartContext);
	return (
		<div>
			<h1>ShoppingCart</h1>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						<div>
							<img
								src={item.image}
								alt="test"
								title="test"
								style={{ width: "50px" }}
							/>
							{item.title}
							<p>Quantity:{item.quantity}</p>
							<p>${item.price}</p>
						</div>
						<button onClick={() => deleteFromCart(item.id)}>-</button>
						<button onClick={() => addToCart(item)}>+</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ShoppingCart;
