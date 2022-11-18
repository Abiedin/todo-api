import { useDispatch } from 'react-redux';
import './buttons.scss';
import { getUserAlboms, getUserTodos, getUserPosts } from '../../slices/user-etra/userExtraSlice';

const Buttons = ({ getAll, removeAll }) => {
  const dispatch = useDispatch();

  return (
    <div className="todobtncl">
      <button
        className="btn-gettodo"
        onClick={() => {
          dispatch(getAll());
          dispatch(getUserAlboms());
          dispatch(getUserTodos());
          dispatch(getUserPosts());
        }}
      >
        Get
      </button>
      <button className="btn-clear" onClick={() => dispatch(removeAll())}>
        Clear All
      </button>
    </div>
  );
};

export default Buttons;
