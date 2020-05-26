# Jag Graphql API (using Serverless)

## Architecture

- Fully Serverless (backend api)
- [OpenJS Architect](https://arc.codes/)
- [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) -standard

## Technologies

- GraphQL Server: [Apollo GraphQL Server](https://www.apollographql.com/server/)
- Serverless Function: [AWS Lambda](https://aws.amazon.com/lambda/),
- Database: [DynamoDB](https://aws.amazon.com/dynamodb/)

## Learn (step-by-step)

- level1: CRUD (User, Post)
- level2: CRUD (User, Post) (with Realtionship User <--> Post)
- level3: CRUD (User, Post, Todo) (User <--> Post) (User <--> Todo)
- **level4:** CRUD (User, Post, Todo) Cursor based Pagination
- level5: CRUD (User, Post, Todo) Authentication (Github & Google)

## Local Setup

- Start the local dev server: `npm start`
- Lint your code: `npm run lint`
- Run your tests: `npm t`
