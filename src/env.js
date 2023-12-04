process.env.AWS_ENDPOINT_URL = 'http://127.0.0.1:4566';
process.env.AWS_ENDPOINT_URL_S3 = 'http://s3.localhost.localstack.cloud:4566';
process.env.AWS_ACCESS_KEY_ID = '12345';
process.env.AWS_SECRET_ACCESS_KEY = '12345';
// us-east-1 produces errors !
process.env.AWS_REGION = "us-east-2"