async function getMoviesBySearchTerm (search) {
    let url = `https://www.omdbapi.com/?apikey=13d7c693&t=${search}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
};
getMoviesBySearchTerm("Cars");
