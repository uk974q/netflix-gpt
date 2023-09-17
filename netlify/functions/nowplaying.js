const NOW_PLAYING_MOVIES = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
const API_MOVIES_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.FIREBASEKEY
    }
};

exports.handler = async function (event) {
  try {
    // const { id } = event.queryStringParameters;
    const response = await fetch(NOW_PLAYING_MOVIES, API_MOVIES_OPTIONS);
    const data = await response.json()
    // console.log("Response",data)
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