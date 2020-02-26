const request = require("request");

const forecast = ({ longitude, latitude }, callback) => {
  const url = `https://api.darksky.net/forecast/2086e6a6032d3933013467c3717ade9e/${longitude},${latitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Not able to connect to location services", undefined);
    } else if (body.error) {
      callback("Something went wrong. Try one more time", undefined);
    } else {
      const { currently, daily } = body;
      callback(undefined, `${daily.data[0].summary} It is currently ${currently.temperature} degress out. There is a ${currently.precipProbability}`);
    }
  })
}

module.exports = forecast;
