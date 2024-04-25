function MoviesList({ movies }) {
	return (
		<ul className="mv-movies">
			{movies.map((movie) => (
				<li key={movie.id}>
					<h3>{movie.title}</h3>
					<p>{movie.year}</p>
					<img src={movie.poster} al={movie.title} />
				</li>
			))}
		</ul>
	);
}

function NoMoviesFound() {
	return <p>No movies found</p>;
}

export default function Movies({ movies }) {
	const hasMovies = movies && movies.length > 0;
	return hasMovies ? <MoviesList movies={movies} /> : <NoMoviesFound />;
}
