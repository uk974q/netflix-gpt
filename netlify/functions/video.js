const VIDEO_PREFIX = "https://api.themoviedb.org/3/movie/"
const VIDEO_SUFFIX = "/videos?language=en-US'"
const API_MOVIES_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.FIREBASEKEY
    }
};

exports.handler = async function (event) {
  try {
    const { id } = event.queryStringParameters;
    const response = await fetch(VIDEO_PREFIX+id+VIDEO_SUFFIX, API_MOVIES_OPTIONS);
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