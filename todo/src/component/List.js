import { useEffect, useState } from "react";
import db from "../data/db.json";
const List = () => {
  //   const valueinputTarget = "";
  const [search, setSearch] = useState("");
  const [nameclass, setNameClass] = useState("");
  const [valueInput, setValue] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    db.filter((item) => item.text.toLowerCase().includes(search)).forEach(
      (todo) => (todo.classList = "filtered")
    );
  };
  const handleDelete = (e) => {
    e.target.parentElement.remove();
  };
  const handleEdit = (e) => {
    //get vlaue li
    const valueEdit = e.target.parentElement.innerText;
    setValue(valueEdit);
    // console.log(valueinputTarget);
    // add class for display
    // e.target.children[0].classList.add("input-edit");
    if (e.target.children[0]) {
      setNameClass("input-edit");
    }
    // console.log(e.target.children[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const push = JSON.stringify({
      text: e.target[0].value,
    });
    console.log(push);
    db.push(push);
  };
  useEffect(() => {
    localStorage.setItem("todo", `${db}`);
  });

  return (
    <div className="ul">
      <div>
        <input
          type="search"
          value={search}
          placeholder="Search in list"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <ul>
        {db.map((item) => (
          <li key={item.text}>
            {item.text}
            <i className="fas fa-pen" onClick={(e) => handleEdit(e)}>
              <input
                className={nameclass}
                type="text"
                value={valueInput}
                // onChange={(e) => (valueinputTarget = e.target.value)}
              />
            </i>
            <i
              className="fas fa-trash-alt"
              onClick={(e) => handleDelete(e)}
            ></i>
          </li>
        ))}
        {/* {searchResult.map((item) => {
          <li>{item}</li>;
        })} */}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Add to do list" className="add" />
        <button>Add </button>
      </form>
    </div>
  );
};

export default List;
