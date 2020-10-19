const AWS = require('aws-sdk');
const querystring = require('querystring');

exports.handler = function (event, context, callback) {
    const params = querystring.parse(event.body);

    const username = params['username']
    const first_name = params['first_name']
    const last_name = params['last_name']
    const name = first_name + ' ' + last_name
    const email = params['email']
    
    // Get an object for connecting to DDB
    const ddb = new AWS.DynamoDB.DocumentClient();
    
    const put_response = ddb.put({
        TableName: 'Users',
        Item: {
            username: username,
            firstName: first_name,
            lastName: last_name,
            email: email
        }
    })
    .promise()
    .then((res) => {
        console.log("Inserted into DynamoDB: " + res)
    }).catch((err) => {
        console.error("Error inserting: " + err)
    });
    
    const response = {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': 'http://petmedicine.com.s3-website.us-east-2.amazonaws.com'},
            body: JSON.stringify('Received request to add user with username \'' + username + '\', named ' + name + ', with email ' + email)
    };
    
    callback(null, response);
};
