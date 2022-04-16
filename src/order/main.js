require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

// configure aws
AWS.config.update({ region: `${process.env.AWS_REGION}` });
const sqs = new AWS.SQS({ apiVersion: `${process.env.AWS_API_VERSION}` });
const queueUrl = process.env.AWS_QUEUE_URL
const port = process.argv.slice(2)[0];
const app = express();

app.use(bodyParser.json());

app.get('/index', (req, res) => {

    //create our order data
    let orderData = {
        'userEmail': req.body['userEmail'],
        'itemName': req.body['itemName'],
        'itemPrice': req.body['itemPrice'],
        'itemsQuantity': req.body['itemsQuantity']
    };

    let messageAtt = {
        "userName": {
            DataType: "String",
            StringValue: orderData.userEmail
        },
        "itemName": {
            DataType: "String",
            StringValue: orderData.itemName
        },
        "itemPrice": {
            DataType: "Number",
            StringValue: orderData.itemPrice
        },
        "itemsQuantity": {
            DataType: "Number",
            StringValue: orderData.itemsQuantity
        }
    }

    let sqsOrderData = {
        MessageAttributes: messageAtt,
        MessageBody: JSON.stringify(orderData),
        MessageDeduplicationId: req.body['userEmail'],
        MessageGroupId: "UserOrders",
        QueueUrl: queueUrl
    };

    console.log(`System | MSG: ${queueUrl}`);
    //send for SQS
    let sendSQSMessage = sqs.sendMessage(sqsOrderData).promise();

    sendSQSMessage
        .then((data) => {
            console.log(`User Order | SUCCESS: ${data.MessageId}`);
            res.send("Thanks you for your order. Check your inbox for the confirmation email.");
        })
        .catch((error) => {
            console.log(`User Order | ERROR: ${error}`);
            res.send("We ran into an error. Please try again");
        });

});

console.log(`Orders service listening on port ${port}`);
app.listen(port);

