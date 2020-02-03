import produce from "immer";

import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  addTodo: ["title", "done"],
});

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    draft.push({
      title: action.title,
      done: action.done
    });
  });

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
});
