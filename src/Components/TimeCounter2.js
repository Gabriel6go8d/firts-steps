import React, {useState, useEffect} from 'react'
import CounterAction from './CounterAction'
import 'react-odometerjs';
import 'odometer/themes/odometer-theme-minimal.css'

function TimeCounter2() {
    const [timercount, setTimerCount] = useState(0) 
    const [clival, setCliVal] = useState(1000)
    const [count, increment,, reset] = CounterAction(clival, clival)    

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

    const changeText = (e) => {
        setCliVal(parseInt(e.target.value)*1000)
    }

    return (
        <div className='col-12 col-lg-3 col-md-5'>
            <h3 className='text-white'>Count {count/1000} Seconds</h3>
            <h3 className='text-white'>Actual Time: </h3>
            <h3 className='text-white odometer'>{timercount}</h3>
            <input type='number' className='col' onChange={changeText}></input>
            <button className='btn btn-success col mt-2 mb-2' onClick={increment}>Increment Timer Interval</button>
            <button className='btn btn-primary col' onClick={reset}>Set Timer Interval</button>               
        </div>
    )
}

export default TimeCounter2
