import { useEffect, useState } from "react";
import db from "../data/db.json";

/**
 *! bad comment
 * /* ----------------------------- get vlaue input ----------------------------
 * !above comment is incorrect.You shouldn't write long and  very dash (-) on your comment
 * * The comments might be long by word and it is good because the  developer explain about code
 * * but comments shouldn't be long by for example this : - / ! and etcetera
 * * but you can write  above comment like this :
 * @     // get value input
 *  VALUE NOT vlaue 
 */
//

// !bad comment
/* ----------------------------- get vlaue input ---------------------------- */
const useInputValue = (getValue) => {
  const [value, setValue] = useState(getValue);

  return {
    value,
    onChange: (e) => setValue(e.target.value),
  };
};
// !bad comment
/* -------------------------------------------------------------------------- */

const List = () => {
  /**
   * * good job is good your use state is first
   */
  // !bad comment
  /* ----------------------- get value input az function ---------------------- */
  const valueinputTarget = useInputValue("");
  const valueAdd = useInputValue("");
  // !bad commenttttttttt
  /* -------------------------------------------------------------------------- */
  const [nameclass, setNameClass] = useState("");
  const [card, setCard] = useState("");
  let getClass = "";

  const [todo, setTodo] = useState([]);

  /* ------------------------------- search box ------------------------------- */

  /**
   * todo: is better one language for write your comment DONT USE TWO LANGUAGE
   */
  //to console javab kamel migiram
  const handleSearch = (e) => {
    const filtered = db.find((n) => n.text.toLowerCase().includes(e));
    //! what is this ???? if this code doesn't you must delete it not comment it.
    // if (filtered) {
    //   setClass("filtered");
    //   console.log(" im  working");
    // }
    // filtered.className = "filtered";
    setCard(filtered);
    getClass = "filtered";

    // !!! it not good see log on browser console.log is for check some code after finish your coding
    // !!! you must delete your console.log and console browser should be empty
    console.log(filtered, e);
    //!! your code must be clean :)
    // return filtered;
  };

  //! bad comment
  /* -------------------------------------------------------------------------- */
  /* --------------------------------- delete --------------------------------- */
  const handleDelete = (e) => {
    e.target.parentElement.remove();
  };
  //! bad comment
  /* -------------------------------------------------------------------------- */
  /* ---------------------------------- edit ---------------------------------- */
  //! bad comment
  // ! if your have bug and you want explain for it you should write it in pull request (I am not sure about thissssss )BUT
  // ! you shouldn't write here
  // car nmikone ta nesfeh dors shode va to console car mikone


  //? What is this function made for?
  // todo: it will be very good this function have a comment
  const handleEdit = (e) => {
    //get vlaue li
    let valueEdit = e.target.parentElement.innerText;
    //! delete console.log()
    console.log(valueEdit);
    //! write camel case like this => valueInputTarget
    valueEdit = valueinputTarget;

    //! what is this ???? if this code doesn't you must delete it not comment it.
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
    //! what is this ???? if this code doesn't you must delete it not comment it.
    // console.log(e.target.children[0]);
  };
  //! bad comment
  //! there is too commentttttttttttttttttttttttttttt
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
  // todo: you should have just one  useEffect hook in a component please fix it. :)
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
    <div className="ul">
      {/*
       * //! bad comment
       * * you can write like this //search box
       */}

      {/* /* ------------------------------- search box -------------------------------  */}
      <div>
        <input
          //! delete it if doesn't.
          // {...searchValue}
          type="search"
          //! delete it if doesn't.
          // value={search}
          placeholder="Search in list"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      {/*   //! bad comment */}
      {/* -------------------------------------------------------------------------- */}

      <ul>
        {/*   //! bad comment
         */}
        {/* --------------------------------- make li -------------------------------- */}
        {db.map((item, index) => (
          <li key={index} className={getClass}>
            {/*   //! delete it if doesn't. */}
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
                  //! delete it if doesn't.
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
      {/*  //! delete it if doesn't. */}

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
        <button>Add</button>
      </form>
    </div>
  );
};

export default List;
