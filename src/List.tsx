import React from 'react';
import { useListTodosQuery } from './graphql/generated';

const List: React.FC = () => {
  const { data } = useListTodosQuery();
  const todos = (data && data.listTodos && data.listTodos.items) || [];
  return (
    <ul>
      {todos.map(todo => (todo ? <li key={todo.id}>{todo.name}</li> : null))}
    </ul>
  );
};

export default List;
