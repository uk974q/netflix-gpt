const SEARCH_MOVIE_PREFIX = "https://api.themoviedb.org/3/search/movie?query="
const SEARCH_MOVIE_SUFFIX= "&include_adult=false&language=en-US&page=1"
const API_MOVIES_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.FIREBASEKEY
    }
};

exports.handler = async function (event) {
  try {
    const { movie } = event.queryStringParameters;
    const response = await fetch(SEARCH_MOVIE_PREFIX+movie+SEARCH_MOVIE_SUFFIX, API_MOVIES_OPTIONS);
    const data = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};