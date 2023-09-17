const OpenAI = require('openai');

exports.handler = async function (event) {
  try {
    const { query } = event.queryStringParameters;
    const openai = new OpenAI();
    const queryPrefix = "Act as a movie recommendation. Get me related movies including the searched term : "
    const querySuffix = "Give only movie names of 5 in comma separated, not numbering, in single line like the example:  happenings, pursuit of happyness, sholay, chemeen, hera pheri"
    const content = queryPrefix + query + querySuffix
    const response = await openai.chat.completions.create({
      messages: [{ role: 'user', content: content  }],
      model: 'gpt-3.5-turbo',
    });
    const data = response.choices[0].message.content.replace(/\n/g, ', ').trim()
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