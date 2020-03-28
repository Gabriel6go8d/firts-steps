import React from 'react'

function Footer() {
    const footstyle = {
        backgroundColor: '#343A40'
    }


    return (
        <div className='container-fluid mt-5' style={footstyle}>
            <div className='row justify-content-between'>
                <div className='col-3 mt-5'>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                </div>   
                <div className='col-3 mt-5'>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                </div> 
                <div className='col-3 mt-5'>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                    <h4 className='col text-white'>Link</h4>
                </div>     
            </div>      
        </div>
    )
}

export default Footer
