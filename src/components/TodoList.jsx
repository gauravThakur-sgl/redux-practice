import { useDispatch, useSelector } from "react-redux";
import Button from "./ui/Button";
import Card from "./ui/Card";
// import CheckBox from "./ui/CheckBox";
import Input from "./ui/Input";
import { useState } from "react";
import {
  addTodos,
  moveToTodo,
  moveToCompleted,
  moveToProgress,
  deleteCompletedTodo,
  moveToPending,
} from "../redux/actions";
import { MdDelete } from "react-icons/md";
export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [formData, setFormData] = useState({ todo: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (formData.todo.trim() !== "") {
        dispatch(addTodos(formData));
      }
      setFormData({ todo: "" });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const HandleMoveToProgress = (id) => {
    dispatch(moveToProgress(id));
  };
  const handleMoveToCompleted = (id) => {
    dispatch(moveToCompleted(id));
  };
  const handleMoveToTodo = (id) => {
    dispatch(moveToTodo(id));
  };
  const handleMoveToPending = (id) => {
    dispatch(moveToPending(id));
  };
  const handleDeleteTodos = (id) => {
    dispatch(deleteCompletedTodo(id));
  };

  const pendingTodos = todos.filter((todo) => todo.status === "pending");
  const todoTodos = todos.filter((todo) => todo.status === "todo");
  const inProgressTodos = todos.filter((todo) => todo.status === "in-progress");
  const completedTodos = todos.filter((todo) => todo.status === "completed");
  console.log(todos);
  return (
    <div className="h-screen px-40 bg-green-100">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-2 pt-6">
          <Input
            type="text"
            name="todo"
            value={formData.todo}
            onChange={handleInputChange}
            placeholder="Add task..."
          />
          <Button type="submit" className="bg-white" title="Add" />
        </div>
      </form>
      <div className="my-10 mx-2">
        <div className="flex justify-between items-center border border-blue-700 border-opacity-40 rounded-xl px-40 py-2 bg-gray-50 hover:bg-white">
          <h2 className="text-lg font-medium">Pending</h2>
          <h2 className="text-lg font-medium">Todo</h2>
          <h2 className="text-lg font-medium">Progress</h2>
          <h2 className="text-lg font-medium">Completed</h2>
        </div>
        <Card className="mt-2 rounded-xl">
          <div className="flex justify-between">
            <div className="">
              <div className="space-y-3">
                {pendingTodos.length > 0 ? (
                  pendingTodos.map((todo) => (
                    <div key={todo.id} className="">
                      <Card className="w-96 h-20 flex justify-between gap-2 bg-yellow-100 text-yellow-800">
                        <p className="p-2 text-wrap">{todo.data}</p>
                        <Button
                          title="Move to Todo"
                          className="text-sm shadow-none hover:bg-yellow-600"
                          onClick={() => handleMoveToTodo(todo.id)}
                        />
                        {/* <CheckBox labelData="Mark Completed" type="checkbox" /> */}
                      </Card>
                    </div>
                  ))
                ) : (
                  <>
                    <Card className="w-96 h-20 flex flex-col items-center gap-2 bg-yellow-100 text-yellow-800">
                      <div className="">
                        <p className="p-2 text-wrap">Todos not Found</p>
                      </div>
                      {/* <CheckBox labelData="Mark Completed" type="checkbox" /> */}
                    </Card>
                  </>
                )}
              </div>
            </div>
            {/* In-Todos */}
            <div className="space-y-3">
              {todoTodos.length > 0 ? (
                todoTodos.map((todo) => (
                  <Card
                    key={todo.id}
                    className="w-96 h-20 flex justify-between gap-2 bg-blue-100 text-blue-800 "
                  >
                    <p className="p-2 text-wrap">{todo.data}</p>
                    <div className="flex justify-center items-center text-sm">
                      <Button
                        className="hover:bg-blue-400"
                        title="<"
                        onClick={() => handleMoveToPending(todo.id)}
                      />
                      <Button
                        className="hover:bg-blue-400"
                        title=">"
                        onClick={() => HandleMoveToProgress(todo.id)}
                      />
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="min-w-96 h-20 flex justify-center items-center gap-2 bg-blue-100 text-blue-800">
                  <p>No Todos</p>
                </Card>
              )}
            </div>
            {/* In-Progress Todos */}
            <div className="space-y-3">
              {inProgressTodos.length > 0 ? (
                inProgressTodos.map((todo) => (
                  <Card
                    key={todo.id}
                    className="w-96 h-20 flex justify-between gap-2 bg-purple-100 text-purple-800"
                  >
                    <p className="p-2 text-wrap">{todo.data}</p>
                    <div className="flex justify-center items-center text-sm">
                      <Button
                        className="hover:bg-purple-400"
                        title="<"
                        onClick={() => handleMoveToTodo(todo.id)}
                      />
                      <Button
                        className="hover:bg-purple-400"
                        title=">"
                        onClick={() => handleMoveToCompleted(todo.id)}
                      />
                    </div>
                  </Card>
                ))
              ) : (
                <Card className="min-w-96 h-20 flex flex-col items-center justify-center gap-2 bg-purple-100 text-purple-800">
                  <p>No In-Progress Todos</p>
                </Card>
              )}
            </div>
            {/*Completed Todos */}
            <div className="space-y-3">
              {completedTodos.length > 0 ? (
                completedTodos.map((todo) => (
                  <Card
                    key={todo.id}
                    className="w-96 h-20 flex flex-col gap-2 bg-green-400 text-green-800"
                  >
                    <div className="flex justify-between items-center">
                      <p className="p-2 text-wrap">{todo.data}</p>
                      <div className="flex justify-center items-center">
                        <Button
                          title="<"
                          className="hover:bg-green-600 text-sm"
                          onClick={() => HandleMoveToProgress(todo.id)}
                        />
                        <Button
                          title={
                            <span className="text-red-500">
                              <MdDelete />
                            </span>
                          }
                          className="hover:bg-green-600 text-sm"
                          onClick={() => handleDeleteTodos(todo.id)}
                        />
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <Card
                  className={
                    "w-96 h-20 flex flex-col justify-center items-center gap-2 bg-green-100 text-green-800"
                  }
                >
                  <p>No Completed Todos</p>
                </Card>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
