import { connect } from 'react-redux';
import { ToDo, fetchToDos, deleteToDo } from '../actions';
import { StoreState } from '../reducers';
import { useState } from 'react';
import { useEffect } from 'react';
interface AppProps {
  toDos: Array<ToDo>;
  fetchToDos: Function;
  deleteToDo: typeof deleteToDo;
}

export const _App = ({
  toDos,
  fetchToDos,
  deleteToDo,
}: AppProps): JSX.Element => {

  const [fetching, setFetching] = useState(false);

  const onButtonClick = (): void => {
    setFetching(true);
    fetchToDos();
    
  };

  const renderList = (): Array<JSX.Element> => {
    return toDos.map((toDo: ToDo) => (
      <div onClick={() => onToDoClick(toDo.id)} key={toDo.id}>
        {toDo.title}
      </div>
    ));
  };

  const onToDoClick = (id: number): void => {
    deleteToDo(id);
  };

  useEffect(() => {
    setFetching(false);
  }, [toDos]);

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {fetching ? 'Loading': renderList()}
    </div>
  );
};

const mapStateToProps = ({ toDos }: StoreState) => {
  return { toDos };
};

export const App = connect(mapStateToProps, { fetchToDos, deleteToDo })(_App);
