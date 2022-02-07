const List = () => {
  return (
    <div className="ul">
      <div>
        <input type="search" placeholder="Search in list" />
      </div>
      <ul>
        <li>
          do project
          <i className="fas fa-pen"></i>
          <i className="fas fa-trash-alt"></i>
        </li>
        <li>
          do project
          <i className="fas fa-pen"></i>
          <i className="fas fa-trash-alt"></i>
        </li>
        <li>
          do project
          <i className="fas fa-pen"></i>
          <i className="fas fa-trash-alt"></i>
        </li>
      </ul>
      <form>
        <input type="text" placeholder="Add to do list" className="add" />
        <button>Add </button>
      </form>
    </div>
  );
};

export default List;
