import { useEffect, useState } from "react";
import db from "../data/db.json";

const useInputValue = (getValue) => {
  const [value, setValue] = useState(getValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
const List = () => {
  const searchValue = useInputValue("");
  const valueinputTarget = useInputValue("");
  const valueAdd = useInputValue("");
  const [nameclass, setNameClass] = useState("");
  const [newClass, setClass] = useState("");
  const [todo, setTodo] = useState([]);
  // empty value input add
  let complate;
  const handleSearch = (e) => {
    const filtered = db.find((n) => n.text.toLowerCase().includes(e));
    if (filtered.text) {
      setClass("filtered");
      console.log("no im not working");
    }
    console.log(filtered, e);
  };
  const handleDelete = (e) => {
    e.target.parentElement.remove();
  };
  const handleEdit = (e) => {
    //get vlaue li
    let valueEdit = e.target.parentElement.innerText;
    console.log(valueEdit);
    valueEdit = valueinputTarget;
    // db.find(ele=>{
    //   valueEdit=

    //   }
    // })
    // setValue(valueEdit);
    // console.log(valueinputTarget);
    // add class for display
    // e.target.children[0].classList.add("input-edit");

    if (e.target.children[0]) {
      setNameClass("input-edit");
    }
    // console.log(e.target.children[0]);
  };
  /* ------------------------ function push kardan data ----------------------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    const push = {
      text: valueAdd.value,
    };

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
    <div className="ul">
      <div>
        <input
          // {...searchValue}
          type="search"
          // value={search}
          placeholder="Search in list"
          onChange={(e) => {
            // const filtered = db.filter((n) => {
            //   n.text.toLowerCase().includes(e.target.value);
            //   // .className("filtered");
            // });
            // console.log(filtered);
            handleSearch(e.target.value);
          }}
        />
      </div>

      <ul>
        {db.map((item, index) => (
          <li key={index} className="">
            <label htmlFor={index}>
              <i
                className="fas fa-pen"
                onClick={(e) => handleEdit(e)}
                id={index}
              >
                <input
                  className={nameclass}
                  type="text"
                  {...valueinputTarget}
                  // onChange={(e) => {
                  //   console.log(e);
                  // }}
                />
              </i>
              <span> {item.text}</span>
            </label>
            <i
              className="fas fa-trash-alt"
              onClick={(e) => handleDelete(e)}
            ></i>
          </li>
        ))}
      </ul>
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
    </div>
  );
};

export default List;
