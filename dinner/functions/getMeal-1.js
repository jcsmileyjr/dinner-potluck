exports.handler = async function () {
    return {
      statusCode: 200,
      body: JSON.stringify({
        messsage: "Hello with Netlify functions Please",
      }),
      headers: {
        /* Required for CORS support to work */
        "Access-Control-Allow-Origin": "*",
        /* Required for cookies, authorization headers with HTTPS */
        "Access-Control-Allow-Credentials": true,
      },
    };
  };