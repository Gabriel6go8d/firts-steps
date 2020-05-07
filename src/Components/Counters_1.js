import React from 'react'
import CounterAction from './CounterAction'

function Counters_1() {
    
    const [count, increment, decrement, reset] = CounterAction(0, 1)
    
    return (
        <div className='col-12 col-md-6 col-lg-3 mt-5 text-center'>
            <h3 className='text-white'>Count: {count}</h3>
            <button className='btn btn-danger col' onClick={reset}>Reset</button>
            <button className='btn btn-success col mt-2 mb-2' onClick={increment}>Increment</button>
            <button className='btn btn-primary col' onClick={decrement}>Decrement</button>         
        </div>
        
    )
}

export default Counters_1
