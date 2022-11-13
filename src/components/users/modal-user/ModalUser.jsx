import React from 'react';
import { useDispatch } from 'react-redux';
import { setChangeTodo } from '../../../slices/todoSlice'
import '../../../modal/modals/modal.scss';

const ModalUser = ({ active, setActive, InputsField }) => {
  const dispatch = useDispatch();
  //const todo = useSelector((state) => state.todo.chtodoTitle);

  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false);
        dispatch(setChangeTodo());
      }}
    >
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
       {InputsField}
      </div>
    </div>
  );
};

export default ModalUser;
