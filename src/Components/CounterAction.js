import {useState} from 'react'

function CounterAction(initial,value) {
    
    const [count, setCount] = useState(initial)

    const increment = () => {
        console.log(value)
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initial)
    }

    return [count, increment, decrement, reset]
}
export default CounterAction
