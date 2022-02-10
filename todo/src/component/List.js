import { useEffect, useState } from "react";

import db from "../data/db.json";

/* ----------------------------- get vlaue input ---------------------------- */
const useInputValue = (getValue) => {
  const [value, setValue] = useState(getValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
/* -------------------------------------------------------------------------- */
const List = () => {
  /* ----------------------- get value input az function ---------------------- */
  const valueinputTarget = useInputValue("");
  const valueAdd = useInputValue("");
  /* -------------------------------------------------------------------------- */
  const [nameclass, setNameClass] = useState("");
  const [card, setCard] = useState("");
  let getClass = "";

  const [todo, setTodo] = useState([]);
  /* ------------------------------- search box ------------------------------- */
  //to console javab kamel migiram
  const handleSearch = (e) => {
    const filtered = db.find((n) => n.text.toLowerCase().includes(e));

    // if (filtered) {
    //   setClass("filtered");
    //   console.log(" im  working");
    // }
    // filtered.className = "filtered";
    setCard(filtered);
    getClass = "filtered";
    console.log(filtered, e);
    // return filtered;
  };
  /* -------------------------------------------------------------------------- */
  /* --------------------------------- delete --------------------------------- */
  const handleDelete = (e) => {
    e.target.parentElement.remove();
  };
  /* -------------------------------------------------------------------------- */
  /* ---------------------------------- edit ---------------------------------- */
  // car nmikone ta nesfeh dors shode va to console car mikone
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
  /* -------------------------------------------------------------------------- */
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
      {/* /* ------------------------------- search box -------------------------------  */}
      <div>
        <input
          // {...searchValue}
          type="search"
          // value={search}
          placeholder="Search in list"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      {/* -------------------------------------------------------------------------- */}

      <ul>
        {/* --------------------------------- make li -------------------------------- */}
        {db.map((item, index) => (
          <li key={index} className={getClass}>
            {/* // className={newClass}>{card} */}
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
      {/* -------------------------------- form add --------------------------------  */}
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
