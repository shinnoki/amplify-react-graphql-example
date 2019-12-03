import React from 'react';
import { graphql, DataProps } from 'react-apollo';
import gql from 'graphql-tag';
import * as queries from './graphql/queries';
import { ListTodosQuery, ListTodosQueryVariables } from './API';

type Props = {} & DataProps<ListTodosQuery, ListTodosQueryVariables>;

const List: React.FC<Props> = props => {
  const { data } = props;
  const todos = (data.listTodos && data.listTodos.items) || [];
  return (
    <ul>
      {todos.map(todo => (todo ? <li key={todo.id}>{todo.name}</li> : null))}
    </ul>
  );
};

export default graphql<{}, ListTodosQuery, ListTodosQueryVariables, Props>(
  gql(queries.listTodos)
)(List);
