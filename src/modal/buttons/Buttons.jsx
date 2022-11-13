import { useDispatch } from "react-redux";

import "./buttons.scss";

const Buttons = ({ getAll, allRemove }) => {
  const dispatch = useDispatch();

  return (
    <div className="todobtncl">
      <button
        className="btn-gettodo"
        onClick={() => {
          dispatch(getAll());
        }}
      >
        Get
      </button>
      <button className="btn-clear" onClick={() => dispatch(allRemove())}>
        Clear All
      </button>
    </div>
  );
};

export default Buttons;
