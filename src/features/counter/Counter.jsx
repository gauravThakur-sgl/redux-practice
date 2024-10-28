import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './counterSlice'

function Counter() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div className='flex justify-center items-center h-screen' >
        <div className='' >
            <button
                aria-label='Increment value'
                onClick={() => dispatch(increment())}
                className='p-2 rounded-md border'
            >Increment</button>
            <span className='p-2'>{count}</span>
            <button
                aria-label='Decrement Label'
                onClick={() => dispatch(decrement())}
                className='p-2 rounded-md border'
            >
                Decrement
            </button>
        </div>
    </div>
  )}

export default Counter