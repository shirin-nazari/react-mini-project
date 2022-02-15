import db from "../data/db.json";
import { useEffect, useState } from "react";
const useInputValue = (getValue) => {
  // * good job. you are write use state at the first
  const [value, setValue] = useState(getValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
const Form = () => {
  //! bad comment
  // use two language and use very dash(-)
  // * you can write fx =>  // function to push data

  /* ------------------------ function push kardan data ----------------------- */
  const valueAdd = useInputValue("");
  const [todo, setTodo] = useState([]);
  //? What is this function made for? 
  //* It is better to write a comment for this function what this doing
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
  // todo: you should have one useEffect hook in a component
  useEffect(() => {
    const todoStore = JSON.stringify(localStorage.getItem("todoStorage"));
    if (todoStore) db.includes(todoStore);
  }, []);
  useEffect(() => {
    localStorage.setItem("todoStorage", JSON.stringify(todo));
  }, [todo]);
  //! bad comment
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
