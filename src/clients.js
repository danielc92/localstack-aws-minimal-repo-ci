const AWS = require('aws-sdk')

const endpoint = process.env.AWS_ENDPOINT_URL

if (!endpoint) throw new Error("Set your endpoint")
 
const eventClient = new AWS.EventBridge({
    endpoint
})

const dynamodbClient = new AWS.DynamoDB({
    endpoint
})

const s3Client = new AWS.S3({
    s3ForcePathStyle: true,
    endpoint: process.env.AWS_ENDPOINT_URL_S3
})

// set this in tests only
if (process.env.AWS_ENDPOINT_URL_S3) {
    s3Client.api.globalEndpoint = process.env.AWS_ENDPOINT_URL_S3
}


module.exports = {
    dynamodbClient, s3Client, eventClient
}