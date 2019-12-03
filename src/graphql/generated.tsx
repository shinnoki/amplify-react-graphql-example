import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};


export type CreateTodoInput = {
  id?: Maybe<Scalars['ID']>,
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type DeleteTodoInput = {
  id?: Maybe<Scalars['ID']>,
};

export type ModelBooleanFilterInput = {
  ne?: Maybe<Scalars['Boolean']>,
  eq?: Maybe<Scalars['Boolean']>,
};

export type ModelFloatFilterInput = {
  ne?: Maybe<Scalars['Float']>,
  eq?: Maybe<Scalars['Float']>,
  le?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  ge?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  between?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ModelIdFilterInput = {
  ne?: Maybe<Scalars['ID']>,
  eq?: Maybe<Scalars['ID']>,
  le?: Maybe<Scalars['ID']>,
  lt?: Maybe<Scalars['ID']>,
  ge?: Maybe<Scalars['ID']>,
  gt?: Maybe<Scalars['ID']>,
  contains?: Maybe<Scalars['ID']>,
  notContains?: Maybe<Scalars['ID']>,
  between?: Maybe<Array<Maybe<Scalars['ID']>>>,
  beginsWith?: Maybe<Scalars['ID']>,
};

export type ModelIntFilterInput = {
  ne?: Maybe<Scalars['Int']>,
  eq?: Maybe<Scalars['Int']>,
  le?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  ge?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  between?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringFilterInput = {
  ne?: Maybe<Scalars['String']>,
  eq?: Maybe<Scalars['String']>,
  le?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  ge?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  notContains?: Maybe<Scalars['String']>,
  between?: Maybe<Array<Maybe<Scalars['String']>>>,
  beginsWith?: Maybe<Scalars['String']>,
};

export type ModelTodoConnection = {
   __typename?: 'ModelTodoConnection',
  items?: Maybe<Array<Maybe<Todo>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type ModelTodoFilterInput = {
  id?: Maybe<ModelIdFilterInput>,
  name?: Maybe<ModelStringFilterInput>,
  description?: Maybe<ModelStringFilterInput>,
  and?: Maybe<Array<Maybe<ModelTodoFilterInput>>>,
  or?: Maybe<Array<Maybe<ModelTodoFilterInput>>>,
  not?: Maybe<ModelTodoFilterInput>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createTodo?: Maybe<Todo>,
  updateTodo?: Maybe<Todo>,
  deleteTodo?: Maybe<Todo>,
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput
};


export type MutationUpdateTodoArgs = {
  input: UpdateTodoInput
};


export type MutationDeleteTodoArgs = {
  input: DeleteTodoInput
};

export type Query = {
   __typename?: 'Query',
  getTodo?: Maybe<Todo>,
  listTodos?: Maybe<ModelTodoConnection>,
};


export type QueryGetTodoArgs = {
  id: Scalars['ID']
};


export type QueryListTodosArgs = {
  filter?: Maybe<ModelTodoFilterInput>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};

export type Subscription = {
   __typename?: 'Subscription',
  onCreateTodo?: Maybe<Todo>,
  onUpdateTodo?: Maybe<Todo>,
  onDeleteTodo?: Maybe<Todo>,
};

export type Todo = {
   __typename?: 'Todo',
  id: Scalars['ID'],
  name: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};

export type UpdateTodoInput = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput
};


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'name' | 'description'>
  )> }
);

export type ListTodosQueryVariables = {
  filter?: Maybe<ModelTodoFilterInput>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};


export type ListTodosQuery = (
  { __typename?: 'Query' }
  & { listTodos: Maybe<(
    { __typename?: 'ModelTodoConnection' }
    & Pick<ModelTodoConnection, 'nextToken'>
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'Todo' }
      & Pick<Todo, 'id' | 'name' | 'description'>
    )>>> }
  )> }
);


export const CreateTodoDocument = gql`
    mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    name
    description
  }
}
    `;
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const ListTodosDocument = gql`
    query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
    }
    nextToken
  }
}
    `;

/**
 * __useListTodosQuery__
 *
 * To run a query within a React component, call `useListTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTodosQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
        return ApolloReactHooks.useQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, baseOptions);
      }
export function useListTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListTodosQuery, ListTodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListTodosQuery, ListTodosQueryVariables>(ListTodosDocument, baseOptions);
        }
export type ListTodosQueryHookResult = ReturnType<typeof useListTodosQuery>;
export type ListTodosLazyQueryHookResult = ReturnType<typeof useListTodosLazyQuery>;
export type ListTodosQueryResult = ApolloReactCommon.QueryResult<ListTodosQuery, ListTodosQueryVariables>;