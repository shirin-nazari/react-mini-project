import db from "../data/db.json";
import { useEffect, useState } from "react";
const useInputValue = (getValue) => {
  const [value, setValue] = useState(getValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
const Form = () => {
  /* ------------------------ function push kardan data ----------------------- */
  const valueAdd = useInputValue("");
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const push = {
      text: valueAdd.value,
    };
    console.log(push.text);
    setTodo(push.text);
    db.push(push);

    return db;
  };
  useEffect(() => {
    const todoStore = JSON.stringify(localStorage.getItem("todoStorage"));
    if (todoStore) db.includes(todoStore);
  }, []);
  useEffect(() => {
    localStorage.setItem("todoStorage", JSON.stringify(todo));
  }, [todo]);
  /* -------------------------------------------------------------------------- */
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={todo}
        placeholder="Add to do list"
        className="add"
        required
        {...valueAdd}
      />
      <button>Add </button>
    </form>
  );
};

export default Form;
