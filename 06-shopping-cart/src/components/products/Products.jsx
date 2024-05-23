import { useContext } from "react";
import { AddToCartIcon } from "../Icons";
import styles from "./Products.module.css";
import { CartContext } from "../../context/CartContext";

function Products({ products }) {
	const { addToCart } = useContext(CartContext);
	function handleAddToCart(product) {
		addToCart(product);
	}

	return (
		<main className={styles.products}>
			<ul>
				{products &&
					products.map((product) => (
						<li key={product.id}>
							<img src={product.image} />
							<div>
								<strong>{product.title}</strong>
							</div>
							<div className={styles.footer}>
								<span>${product.price}</span>
								<button onClick={() => handleAddToCart(product)}>
									<AddToCartIcon />
								</button>
							</div>
						</li>
					))}
			</ul>
		</main>
	);
}

export default Products;
