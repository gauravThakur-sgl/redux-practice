import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNotes, deleteAllNotes, deleteNotes } from "./todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  //   function handleOnChange(e) {
  //     const { name, value } = e.target;

  //     setData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   }
  function handleSubmit(e) {
    e.preventDefault();
    if (data.trim() !== "") {
      dispatch(addNotes(data));
      setData("");
    }
  }
  console.log(todos);
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <h2 className="font-bold text-xl mt-10">Add Notes</h2>
      <div className="flex flex-col justify-center items-center gap-4">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center p-2 gap-2">
            <textarea
              name="message"
              id=""
              placeholder="Enter You todos"
              className="bg-slate-200 focus:ring-1 rounded-md p-2"
              value={data}
              onChange={(e) => setData(e.target.value)}
            ></textarea>
            <button className="p-2 px-6 border rounded-md font-medium text-blue-500 hover:bg-blue-500 hover:text-white">
              Add
            </button>
            <button className="p-2 px-6 border rounded-md font-medium text-red-500 hover:bg-red-500 hover:text-white"
                onClick={() => dispatch(deleteAllNotes())}
            >
              DeleteAll
            </button>
          </div>
        </form>
        <div className="w-full max-w-md bg-blue-50 rounded-md">
          {todos.map((todo, index) => (
            <div key={index} className="">
              <div className="flex justify-between items-center p-2">
                <div className="p-2"> {todo}</div>
                <div className="">
                  <button
                    onClick={() => dispatch(deleteNotes())}
                    className="p-2 px-6 border rounded-md font-medium text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
