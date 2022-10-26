import "./todo-form.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { addNewTodo, getTodos } from "../../slices/todoSlice";
import Input from "./Input";

export const InputField = () => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = React.useState("");

  const addTodoHandler = () => {
    if (todoValue.length) {
      console.log("todoValue =", todoValue);
      setTodoValue("");
      dispatch(addNewTodo(todoValue));
    }
  };

  /* React.useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);*/

  return (
    <form
      className="form-todo"
      onSubmit={(e) => {
        e.preventDefault();
        addTodoHandler();
      }}
    >
      <Input
        placeholer={"New todo...."}
        value={todoValue}
        updateText={setTodoValue}
      />
    </form>
  );
};
