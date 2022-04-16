require('dotenv').config();
const AWS = require('aws-sdk');
const { Consumer } = require('sqs-consumer');
const nodemailer = require('nodemailer');


// configure smtp email
let transportGMAIL = nodemailer.createTransport({
    service: `${process.env.EMAIL_SERVICE}`,
    auth: {
        user: `${process.env.EMAIL_AUTH_USER}`,
        pass: `${process.env.EMAIL_AUTH_PASS}`
    }
});

function sendEmail(message){
    let sqsMessage = JSON.parse(message.Body);
    const emailMessage = {
        from: `${process.env.SENDER_EMAIL_ADDRESS}`,
        to: sqsMessage.userEmail,
        subject: 'Order just Received | from AleFuuuu',
        html: `<p>Hi ${sqsMessage.userEmail}.</p><p>We receiver your order of ${sqsMessage.itemsQuantity} ${sqsMessage.itemName} with total $ ${sqsMessage.itemsQuantity * sqsMessage.itemPrice} has ben received ans is being processed.</p><p>Thanks you for shopping with us, Good day for you!</p>`
    };
    
    transportGMAIL.sendMail(emailMessage, function(error, info){
        if(error){
            console.log(`Email AleFuuuu | ERROR: ${error}`);
        } else {
            console.log(`Email AleFuuuu | INFO: ${info.response}`);
        }
    });
}


// configure aws
AWS.config.update({ region: `${process.env.AWS_REGION}` });
const queueUrl = process.env.AWS_QUEUE_URL;

const app = Consumer.create({
    queueUrl: queueUrl,
    handleMessage: async (message) => {
        sendEmail(message);
    },
    sqs: new AWS.SQS(),
    batchSize: 10
});

app.on('error', (error) => {
    console.error(error.message);
});

app.on('processing_error', (error) => {
    console.error(error.message);
});

console.log("E-mail AleFuuuu is running");
app.start();