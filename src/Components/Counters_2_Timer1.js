import React, {useState, useEffect} from 'react'
import CounterAction from './CounterAction'
import 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css'

function Counters_2_Timer1() {
    const [timercount, setTimerCount] = useState(0) 
    const [count, increment, decrement, reset] = CounterAction(1000, 1000)

    const tick = () => {
        setTimerCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, count)
        console.log('bad behavior')
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div className='col-12 col-md-6 col-lg-3 mt-5 text-center'>
            <h3 className='text-white'>Count {count/1000} Seconds</h3>
            <h3 className='text-white'>Actual Time: </h3>
            <h3 className='text-white odometer'>{timercount}</h3>
            <button className='btn btn-danger col' onClick={reset}>Reset</button>
            <button className='btn btn-success col mt-2 mb-2' onClick={increment}>+1 seg</button>
            <button className='btn btn-primary col' onClick={decrement}>-1 seg</button>
        </div>
    )
}

export default Counters_2_Timer1
