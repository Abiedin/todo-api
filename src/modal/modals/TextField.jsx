import { useDispatch, useSelector } from "react-redux";

const TextField = ({ setChangeValue }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.chtodoTitle);
  return (
    <div className="">
      <textarea
        type="text"
        value={todo}
        onChange={(e) => dispatch(setChangeValue(e.target.value))}
        className="textarea-input"
      />
    </div>
  );
};

export default TextField;
