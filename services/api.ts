const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTI1YzRhNDc4N2RiMjExZGQ0YTFlNDkyMDJjYzE3NiIsIm5iZiI6MTc1MTk3NDk2NS4wMjMsInN1YiI6IjY4NmQwNDM1ZjZmZjFhMjU5MTZlODc4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MZy8RM5nfyfcgtvnXtPYQAcOjnJuoQo1HynfVrsYEiU'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));