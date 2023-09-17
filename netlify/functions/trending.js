const TRENDING_MOVIE = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
const API_MOVIES_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.FIREBASEKEY
    }
};

exports.handler = async function (event) {
  try {
    const response = await fetch(TRENDING_MOVIE, API_MOVIES_OPTIONS);
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