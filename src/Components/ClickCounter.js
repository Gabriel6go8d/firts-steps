import React from 'react'
import CounterAction from './CounterAction'

function ClickCounter() {
    
    const [count, increment, decrement, reset] = CounterAction(0, 1)
    
    return (
        <div className='col-12 col-lg-3 col-md-5'>
            <h3 className='text-white'>Count: {count}</h3>
            <button className='btn btn-danger col' onClick={reset}>Reset</button>
            <button className='btn btn-success col mt-2 mb-2' onClick={increment}>Increment</button>
            <button className='btn btn-primary col' onClick={decrement}>Decrement</button>         
        </div>
        
    )
}

export default ClickCounter
