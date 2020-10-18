## API Gateway
API Gateway route requst to Lambda function

Go to API Gateway -> select REST API ->  

Create Resource -> Add Actions -> link to lambda function


## Lambda
Create function -> Choose or Create an execution role

Actions -> Deploy API ->

```
const querystring = require('querystring')



export.handler = async (event) => {
  const params = querystring.parse(event.body);

  const response ={
    statusCode: 200,
    body: JSON:stringify('Hello')
  };

  retrun response;
}
```
## Form

```
  <form action="call api gate way">
```


## CORS
In the lambda function, identify the response is safe to particular domain.
Chrowm need this 


```
const querystring = require('querystring')



export.handler = async (event) => {
  const params = querystring.parse(event.body);

  const response ={
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': 'the doamin'}
    body: JSON:stringify('Hello')
  };

  retrun response;
}
```

## Access SES in lambda
Verify a New Email address in SES

Create the Execution rule of the Lambda: "Lambda for email"
Attach policy "AmazonSESFullAccess" "AWSLambdaBasicExecutionRule"

```
var emailParams = {
        Destination: {
            ToAddresses: ["test@wisdompetmedicine.com"]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Well hello there!'
                }
            },
            Subject: {
                Data: 'Email from Lambda!'
            }
        },
        Source: "test@wisdompetmedicine.com"
    };
    
    ses.sendEmail(emailParams, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
    
    const response = {
            statusCode: 200,
            headers: { 'Access-Control-Allow-Origin': 'http://yellowtagmedia-aws.com'},
            body: JSON.stringify('Thank you, ' + params['name'] + '! ' +
                                 'We appreciate your feedback!'),
    };
    
    callback(null, response);
```








