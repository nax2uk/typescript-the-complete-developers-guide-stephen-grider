import { ActionTypes, ToDo, Action } from '../actions';

export const toDosReducer = (state: Array<ToDo> = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchToDos:
      return action.payload;
    case ActionTypes.deleteToDo:
      return state.filter((toDo: ToDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};
