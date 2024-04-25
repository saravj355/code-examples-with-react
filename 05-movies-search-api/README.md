# Enunciado

Crea una aplicación para buscar películas

API a usar: - https://movie-database-alternative.p.rapidapi.com/
API KEY: ea859a7519msh804b9571d45e2f5p11c9aejsnbe65a971925e

Requerimientos:

[x] Necesita mostrar un input para buscar la película y un botón para buscar.

[x] Lista las películas y muestra el título, año y poster.

[] Que el formulario funcione

[] Haz que las películas se muestren en un grid responsive.

[] Hacer el fetching de datos a la API

fetch(`${MOVIES_API_ENDPOINT}?r=json&s=${searchValue}`, {
headers: {
"X-RapidAPI-Key": MOVIES_API_KEY,
"X-RapidAPI-Host": MOVIES_HOST,
},
})
.then((response) => response.json())
.then((data) => {
setMovies(data.Search);
});
