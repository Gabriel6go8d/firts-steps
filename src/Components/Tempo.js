import React, {useState} from 'react'
import 'react-odometerjs';
//import 'odometer/themes/odometer-theme-minimal.css'
import '../Utilities/MyOdometer.css'
import logo from '../logo.svg';
import '../App.css';

function Tempo() {
    const logosize = {
        height: '100px'
    }

    const [count, setCount] = useState(1)
    const [odoValue, setOdoValue] = useState(0)

    const doit = () => {
        setOdoValue(count*200)
        setCount(pre => pre + 1) 
    }
   

    return (
        <div className='col-12 col-lg-3 col-md-5'>
            <img src={logo} className="App-logo col" alt="logo" style={logosize}/>
            <h1 className='text-white odometer col'>{odoValue}</h1>
            <button className='btn btn-primary btn-lg col' onClick={doit}>click</button>
        </div>
                 
    )
}

export default Tempo
