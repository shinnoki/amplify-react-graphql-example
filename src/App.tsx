import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync';
import { ApolloProvider } from 'react-apollo';
import awsconfig from './aws-exports';
import Form from './Form';
import List from './List';

Amplify.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken(),
  },
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Form />
      <List />
    </ApolloProvider>
  );
};

export default withAuthenticator(App, true);
