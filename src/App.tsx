import React from 'react';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createAuthLink } from 'aws-appsync-auth-link';
import awsconfig from './aws-exports';
import Form from './Form';
import List from './List';

Amplify.configure(awsconfig);

const client = new ApolloClient({
  link: ApolloLink.from([
    createAuthLink({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: 'AMAZON_COGNITO_USER_POOLS',
        jwtToken: async () =>
          (await Auth.currentSession()).getAccessToken().getJwtToken(),
      },
    }),
    createHttpLink({
      uri: awsconfig.aws_appsync_graphqlEndpoint,
    }),
  ]),
  cache: new InMemoryCache(),
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
