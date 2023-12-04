const { dynamodbClient, s3Client, eventClient } =require("../clients")
const uuid = require("uuid")
const {faker} = require("@faker-js/faker")



// create a table in localstack
it("dynamodb service test", async () => 
{
    expect.assertions(1)
    const result = await dynamodbClient.createTable({
        TableName: uuid.v4(),
        AttributeDefinitions: [
            {
                AttributeName: "A",
                AttributeType: "S"
            }
        ],
        KeySchema: [
            {
                AttributeName: "A",
                KeyType: "HASH"
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        }
    }).promise()

expect(
    result
).toBeDefined()
})

// create a bucket in localstack
it("s3 service test", async( ) => {
    expect.assertions(1)
    const result = await s3Client.createBucket({
        Bucket: faker.string.alphanumeric(20).toLowerCase()
    }).promise()
 
    expect(
        result
    ).toBeDefined()
})

it ("eventbridge service test", async() => {

    expect.assertions(1)

        const result = await eventClient.createEventBus({
            Name: faker.string.alphanumeric(10)
        }).promise()
        expect(result).toBeDefined()
 


})