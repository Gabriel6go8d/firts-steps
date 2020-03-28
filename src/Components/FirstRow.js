import React from 'react'
import ClickCounter from './ClickCounter'
import TimeCounter from './TimeCounter'
import TimeCounter2 from './TimeCounter2'
import Tempo from './Tempo'

function FirstRow() {

    
    return (
        <div className='row mt-5 justify-content-between'>
            <ClickCounter/>
            <TimeCounter/>
            <TimeCounter2/>
            <Tempo/>
        </div>
    )
}

export default FirstRow
