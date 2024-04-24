import { useEffect, useState } from "react";
import { getRandomFact } from "../services/fact";

export default function useFact() {
	const [fact, setFact] = useState();

	const updateFact = () => {
		getRandomFact().then((newFact) => setFact(newFact));
	};

	useEffect(updateFact, []);

	return { fact, updateFact };
}
