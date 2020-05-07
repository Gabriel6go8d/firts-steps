import React from 'react'
import Counters1 from './Counters_1'
import Counters2Timer1 from './Counters_2_Timer1'
import Counters3Timer2 from './Counters_3_Timer2'
import Counters4Odometro from './Counters_4_Odometro'

function Counters() {

    
    return (
        <div className='col-12 col-md-6 col-lg-8'>
            <div className='row mt-5 justify-content-between'>
                <Counters1/>
                <Counters2Timer1/>
                <Counters3Timer2/>
                <Counters4Odometro/>
            </div>
        </div>
    )
}

export default Counters
