import React from 'react'
import Counters from './Counters';
import Calculator from './Calculator';

function Content() {
    return (
        <div className='row m-0 p-0 justify-content-around'>
            <Calculator/>
            <Counters/>
        </div>
    )
}

export default Content
