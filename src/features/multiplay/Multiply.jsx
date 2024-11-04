import { useDispatch, useSelector } from "react-redux"
import { decreaseByTenK, multiplyByFour, multiplyByTwo } from "./multiplySlice"

function Multiply() {
    const count = useSelector(state =>  state.multiply.value)
    const dispatch = useDispatch()
  return (
    <div>
        <button
        aria-label="Increment Value"
         onClick={() => dispatch(multiplyByTwo())}>Multiply By 2</button>
        <span>{count}</span>
        <button onClick={() => dispatch(multiplyByFour())}>Multiplyu by Four</button>
        <button onClick={() => dispatch(decreaseByTenK())}>Decrease Me</button>
    </div>
  )
}

export default Multiply