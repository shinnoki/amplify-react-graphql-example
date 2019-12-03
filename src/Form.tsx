import React, { useState } from 'react';
import { useCreateTodoMutation } from './graphql/generated';

const Form: React.FC = () => {
  const [createTodo] = useCreateTodoMutation();
  const [name, setName] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        createTodo({
          variables: {
            input: {
              name,
            },
          },
          refetchQueries: ['ListTodos'],
        });
      }}
    >
      <input value={name} onChange={e => setName(e.target.value)}></input>
      <button type="submit">add</button>
    </form>
  );
};

export default Form;
