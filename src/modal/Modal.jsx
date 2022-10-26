import React from "react";
import "./modal.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setChangeValue, setChangeTodo } from "../slices/todoSlice";

const Modal = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.chtodoTitle);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        setActive(false);
        dispatch(setChangeTodo());
      }}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <form action="">
          <textarea
            type="text"
            value={todo}
            onChange={(e) => dispatch(setChangeValue(e.target.value))}
            className="textarea-input"
          />
          <button
            className="textarea-btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch(setChangeTodo());
              setActive(false);
            }}
          >
            Add post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
