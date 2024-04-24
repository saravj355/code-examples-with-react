import "./App.css";
import useCatImage from "./hooks/useCatImage";
import useFact from "./hooks/useFact";

function App() {
	const { fact, updateFact } = useFact();
	const { imageUrl } = useCatImage({ fact });

	return (
		<main>
			{fact && <p>Fact: {fact}</p>}
			<button onClick={updateFact}>Get new fact</button>
			{imageUrl ? (
				<img
					src={imageUrl}
					alt={`A random image of a cat based on this word`}
				/>
			) : (
				"loading..."
			)}
		</main>
	);
}

export default App;
