const AWS = require("aws-sdk");
const querystring = require("querystring");

// Object to handle email
var ses = new AWS.SES();

exports.handler = function (event, context, callback) {
  const params = querystring.parse(event.body);

  var emailParams = {
    Destination: {
      ToAddresses: ["test@wisdompetmedicine.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Well hello there!",
        },
      },
      Subject: {
        Data: "Email from Lambda!",
      },
    },
    Source: "test@wisdompetmedicine.com",
  };

  ses.sendEmail(emailParams, function (err, data) {
    if (err) console.log(err, err.stack);
    // an error occurred
    else console.log(data); // successful response
  });

  const response = {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "http://yellowtagmedia-aws.com" },
    body: JSON.stringify("Thank you, " + params["name"] + "! " + "We appreciate your feedback!"),
  };

  callback(null, response);
};
