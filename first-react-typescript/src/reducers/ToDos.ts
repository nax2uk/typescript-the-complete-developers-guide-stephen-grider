import { FetchToDosAction, ToDo } from '../actions';
import { ActionTypes } from '../actions/types';

export const toDosReducer = (state: Array<ToDo> = [], action: FetchToDosAction) => {
  switch (action.type) {
    case ActionTypes.fetchToDos:
      return action.payload;
    default:
      return state;
  }
};
