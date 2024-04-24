import { useEffect, useState } from "react";
import { getImageByText } from "../services/cat";

export default function useCatImage({ fact }) {
	const [imageUrl, setImageUrl] = useState();

	useEffect(() => {
		if (!fact) return;

		const firstWord = fact.split(" ")[0];
		getImageByText(firstWord).then((imageUrl) => setImageUrl(imageUrl));
	}, [fact]);

	return { imageUrl };
}
