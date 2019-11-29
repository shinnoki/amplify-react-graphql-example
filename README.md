# amplify-react-graphql-example

## Initialize React Project

```
$ create-react-app amplify-react-graphql-example --typescript
```

## Setting Up AWS Amplify

### Amplify Init

```
$ amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project: amplifyreactgraphqle
? Enter a name for the environment: dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building: javascript
Please tell us about your project
? What javascript framework are you using: react
? Source Directory Path: src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
Using default provider  awscloudformation

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

? Do you want to use an AWS profile? No
? accessKeyId:  (<YOUR_ACCESS_KEY_ID>)
? secretAccessKey:  (<YOUR_SECRET_ACCESS_KEY>)
? region:  ap-northeast-1
```

### Add AppSync API & Cognito Authentication

```
$ amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: amplifyreactgraphqle
? Choose the default authorization type for the API Amazon: Cognito User Pool
Using service: Cognito, provided by: awscloudformation

 The current configured provider is Amazon Cognito.

 Do you want to use the default authentication and security configuration?: Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in?: Username
 Do you want to configure advanced settings?: No, I am done.
Successfully added auth resource
? Do you want to configure advanced settings for the GraphQL API: No, I am done.
? Do you have an annotated GraphQL schema?: No
? Do you want a guided schema creation?: Yes
? What best describes your project: Single object with fields (e.g., “Todo” with ID, name, description)
? Do you want to edit the schema now?: No
```

### Deploy Stacks

```
$ amplify push
✔ Successfully pulled backend environment dev from the cloud.

Current Environment: dev

| Category | Resource name                | Operation | Provider plugin   |
| -------- | ---------------------------- | --------- | ----------------- |
| Auth     | amplifyreactgraphqlefb2b3ffe | Create    | awscloudformation |
| Api      | amplifyreactgraphqle         | Create    | awscloudformation |
? Are you sure you want to continue?: Yes

The following types do not have '@auth' enabled. Consider using @auth with @model
	 - Todo
Learn more about @auth here: https://aws-amplify.github.io/docs/cli-toolchain/graphql#auth


GraphQL schema compiled successfully.

Edit your schema at /Users/shinnoki/.ghq/github.com/shinnoki/amplify-react-graphql-example/amplify/backend/api/amplifyreactgraphqle/schema.graphql or place .graphql files in a directory at /Users/shinnoki/.ghq/github.com/shinnoki/amplify-react-graphql-example/amplify/backend/api/amplifyreactgraphqle/schema
? Do you want to generate code for your newly created GraphQL API: Yes
? Choose the code generation language target: typescript
? Enter the file name pattern of graphql queries, mutations and subscriptions: src/graphql/**/*.ts
? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions: Yes
? Enter maximum statement depth [increase from default if your schema is deeply nested]: 2
? Enter the file name for the generated code: src/API.ts

...

✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Code generated successfully and saved in file src/API.ts
✔ All resources are updated in the cloud

GraphQL endpoint: https://***.appsync-api.ap-northeast-1.amazonaws.com/graphql
```

## Implement React Code

### Add Dependencies

```
$ yarn add aws-amplify aws-amplify-react
```
