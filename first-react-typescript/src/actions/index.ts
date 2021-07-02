import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchToDosAction {
  type: ActionTypes.fetchToDos;
  payload: ToDo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';
export const fetchToDos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ToDo[]>(url);
    console.log(response);
    dispatch<FetchToDosAction>({
      type: ActionTypes.fetchToDos,
      payload: response.data,
    });
  };
};
