import "./App.css";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies";
import useSearch from "./hooks/useSearch";

function App() {
	const { movies, getMovies } = useMovies();
	const { search, updateSearch } = useSearch({ onSearch: getMovies });

	function handleSubmit(event) {
		event.preventDefault();
		const { query } = Object.fromEntries(new FormData(event.target));
		if (!query) return;
		updateSearch(query);
	}

	function handleChange(event) {
		updateSearch(event.target.value);
	}

	return (
		<div className="mv-container">
			<header>
				<h1>Movies App</h1>
				<form onSubmit={handleSubmit}>
					<input
						name="query"
						onChange={handleChange}
						value={search}
						placeholder="Avengers, Titanic..."
					/>
					<button type="submit">Search</button>
				</form>
			</header>
			<main>
				<Movies movies={movies} />
			</main>
		</div>
	);
}

export default App;
