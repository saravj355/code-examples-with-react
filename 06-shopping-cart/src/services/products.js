const PRODUCTS_API_ENDPOINT = "https://fakestoreapi.com";
async function getProducts() {
	const response = await fetch(`${PRODUCTS_API_ENDPOINT}/products`);
	const products = await response.json();
	return products;
}

async function getCategories() {
	const response = await fetch(`${PRODUCTS_API_ENDPOINT}/products/categories`);
	const categories = await response.json();
	return categories;
}

export { getCategories, getProducts };
