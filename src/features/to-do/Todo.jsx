import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addNotes,
  deleteAllNotes,
  deleteNotes,
  updateNote,
  setEditingId,
} from "./todoSlice";

function Todo() {
  const { todos, editingId } = useSelector((state) => state.todo);
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
      if (editingId !== null) {
        dispatch(
          updateNote({
            id: editingId,
            text: data,
          })
        );
      } else {
        dispatch(
          addNotes({
            text: data,
          })
        );
      }
      setData("");
    }
  }
  function handleEdit(todo) {
    setData(todo.text);
    dispatch(setEditingId(todo.id));
  }
  function handleCancel() {
    setData("");
    dispatch(setEditingId(null));
  }
  console.log(todos);
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <h2 className="font-bold text-xl mt-10">
        {editingId !== null ? "Edit Note" : "Add Note"}
      </h2>
      <div className="flex flex-col justify-center items-center gap-4">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center p-2 gap-2">
            <textarea
              name="message"
              id=""
              placeholder={
                editingId !== null ? "Edit your Todo" : "Enter your todo"
              }
              className="bg-slate-200 focus:ring-1 rounded-md p-2"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <button className="p-2 px-6 border rounded-md font-medium text-blue-500 hover:bg-blue-500 hover:text-white">
              {editingId !== null ? "Update" : "Add"}
            </button>
            {editingId !== null && (
              <button
                type="button"
                onClick={handleCancel}
                className="p-2 px-6 border rounded-md font-medium text-gray-500 hover:bg-gray-500 hover:text-white"
              >
                Cancel
              </button>
            )}
            {editingId !== null && (
              <button
                className="p-2 px-6 border rounded-md font-medium text-red-500 hover:bg-red-500 hover:text-white"
                onClick={() => dispatch(deleteAllNotes())} //use dispatch with arrow functions
              >
                DeleteAll
              </button>
            )}
          </div>
        </form>
        <div className="w-full max-w-md bg-blue-50 rounded-md text-wrap">
          {todos && todos.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4"
            >
              <div className="flex-1">{item.text}</div>
              <div className="flex gap-2">
                <button
                  className="p-2 px-6 border rounded-md font-medium text-red-500 hover:bg-red-500 hover:text-white"
                  onClick={() => dispatch(deleteNotes(item.id))}
                >
                  Delete
                </button>
                <button
                  className="p-2 px-6 border rounded-md font-medium text-blue-500 hover:bg-blue-500 hover:text-white"
                  onClick={() => handleEdit(item)}
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;
