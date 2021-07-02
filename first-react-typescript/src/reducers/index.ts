import { combineReducers } from 'redux';
import { ToDo } from '../actions';
import { toDosReducer } from './ToDos';

export interface StoreState {
    toDos: Array<ToDo>
}
export const reducers = combineReducers<StoreState>({
    toDos: toDosReducer
});