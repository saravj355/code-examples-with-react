const CAT_ENDPOINT_IMAGE = "https://cataas.com/cat/says";

export async function getImageByText(text) {
	const image = await fetch(`${CAT_ENDPOINT_IMAGE}/${text}`);
	return image.url;
}
