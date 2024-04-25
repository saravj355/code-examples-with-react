const MOVIES_API_ENDPOINT =
	"https://movie-database-alternative.p.rapidapi.com/";
const MOVIES_API_KEY = "6386898827msh5dc09c5165216a4p1feafcjsn3c8cacc3f212";
const MOVIES_HOST = "movie-database-alternative.p.rapidapi.com";

export async function findMovies(search) {
	try {
		if (!search) {
			return [];
		}

		const options = {
			headers: {
				"X-RapidAPI-Key": MOVIES_API_KEY,
				"X-RapidAPI-Host": MOVIES_HOST,
			},
		};

		const response = await fetch(`${MOVIES_API_ENDPOINT}?s=${search}`, options);

		const foundMovies = await response.json();

		if (!foundMovies.Search) {
			return [];
		}
		return mapMovies(foundMovies.Search);
	} catch (e) {
		throw new Error("Failed to fetch movies");
	}
}

function mapMovies(movies) {
	return movies.map((movie) => ({
		id: movie.imdbID,
		title: movie.Title,
		year: movie.Year,
		poster: movie.Poster,
	}));
}
