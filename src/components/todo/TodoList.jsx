import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { InputField } from './InputField';
import Buttons from '../../modal/buttons/Buttons';
import './todo.scss';
import Modal from '../../modal/modals/Modal';
import { allRemove, getAll } from '../../slices/todoSlice';
import TextField from '../../modal/modals/TextField';
import { setChangeValue } from '../../slices/todoSlice';
import { LinearProgress, Pagination } from '@mui/material';

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const todos = useSelector((state) => state.todo.todos);
  const [page, setPage] = useState(1);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
      todos ? setLoading(false) : setLoading(true);
  }, [todos]);

  return (
    <div className="todo-conteiner">
      <h1 className="todo-title">TodoList</h1>
      <InputField />
      <div className="todo-info">
        <span>All todos: {todos.length}</span>
      </div>
      <Buttons getAll={getAll} removeAll={allRemove} setLoading={setLoading} />

      <Modal
        active={modalActive}
        setActive={setModalActive}
        TextField={<TextField value="" setChangeValue={setChangeValue} />}
      />
      <div className="todo-ul">
        
        {loading ? (
          <LinearProgress style={{ backgroundColor: 'gold' }} />
        ) : (
          todos
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((todo) => (
              <TodoItem
                key={todo.title}
                todo={todo}
                setModalActive={setModalActive}
              />
            ))
        )}
      </div>
      <div className={todos.length / 10 >= 1 ? 'coins-pagination' : 'coins-pagination-non'}>
        <Pagination
          count={Math.ceil(todos?.length / 10)}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 120);
          }}
        >
          {' '}
        </Pagination>
      </div>
    </div>
  );
};

export default TodoList;
