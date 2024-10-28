import Counter from "./features/counter/Counter"
import Multiply from "./features/multiplay/Multiply"
import Todo from "./features/to-do/Todo"

function App() {

  return (
    <>
      <div className="">
        <Todo />
        <Counter />
        <Multiply />
      </div>
    </>
  )
}

export default App
