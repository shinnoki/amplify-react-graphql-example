import React, { useState } from 'react';
import { graphql, MutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import * as mutations from './graphql/mutations';
import { CreateTodoMutation, CreateTodoMutationVariables } from './API';

type Props = {} & MutateProps<CreateTodoMutation, CreateTodoMutationVariables>;

const Form: React.FC<Props> = props => {
  const { mutate } = props;
  const [name, setName] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        mutate({
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

export default graphql<
  {},
  CreateTodoMutation,
  CreateTodoMutationVariables,
  Props
>(gql(mutations.createTodo))(Form);
