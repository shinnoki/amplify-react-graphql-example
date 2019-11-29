import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsconfig from './aws-exports';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

Amplify.configure(awsconfig);

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    (API.graphql(graphqlOperation(queries.listTodos)) as Promise<any>).then(
      result => {
        setTodos(result.data.listTodos.items);
      }
    );
  }, []);

  return (
    <div className="App">
      <form
        onSubmit={e => {
          e.preventDefault();
          (API.graphql(
            graphqlOperation(mutations.createTodo, {
              input: {
                name,
              },
            })
          ) as Promise<any>).then(result => {
            setTodos(oldTodos => [result.data.createTodo, ...oldTodos]);
          });
        }}
      >
        <input value={name} onChange={e => setName(e.target.value)}></input>
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default withAuthenticator(App, true);
