const sanityClient = require("@sanity/client");
const { projectId, dataSet } = process.env;

const client = sanityClient({
  projectId: projectId,
  dataset: dataSet,
  apiVersion: "2021-06-07", // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
});

// Get array of meals from online database and current device list of meals.
// Compare local meal's codes to online meal's code. There there is a match,
// then swap for the online meal. Return new array to update device.
const getData = async (testCode) => {
  const query = '*[_type == "meal"]';
  let onlineData = await client.fetch(query).then((meals) => {
    return meals;
  });

  let data = {};
  data.answer = false;
  onlineData.forEach(meal => {
      if(meal.code === testCode){
        data.answer = true;
        data.meal = meal;
      }
  })
  return await data;
};

exports.handler = async function (event) {
  const code = JSON.parse(event.body);
  var testData = await getData(code);
  return {
    statusCode: 200,
    body: JSON.stringify({ data: testData }),
    headers: {
      /* Required for CORS support to work */
      "Access-Control-Allow-Origin": "*",
      /* Required for cookies, authorization headers with HTTPS */
      "Access-Control-Allow-Credentials": true,
    },
  };
};

