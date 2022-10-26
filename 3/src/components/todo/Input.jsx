const Input = ({ placeholer, todoValue, updateText }) => {
  return (
    <input
      type="text"
      value={todoValue}
      placeholder={placeholer}
      onChange={(e) => updateText(e.target.value)} //на каждое изменение в этом инпуте, с помощью (e)-ивента, изменяем состояние на ивент таргет велью - тоесть на велью нашего инпута, тем самых велью хранится в нашем состоянии
      className="todo-input"
    />
  );
};

export default Input;
