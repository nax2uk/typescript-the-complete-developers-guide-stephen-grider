import { connect } from 'react-redux';
import { ToDo, fetchToDos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  toDos: Array<ToDo>;
  fetchToDos(): any;
}

export const _App = ({ toDos, fetchToDos }: AppProps): JSX.Element => {
  const onButtonClick = (): void => {
    fetchToDos();
  };

  const renderList = (): Array<JSX.Element> => {
    return toDos.map((toDo: ToDo) => <div key={toDo.id}>{toDo.title}</div>);
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ toDos }: StoreState) => {
  return { toDos };
};

export const App = connect(mapStateToProps, { fetchToDos })(_App);
