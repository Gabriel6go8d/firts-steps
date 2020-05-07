import React from 'react'

function Footer() {
    const footstyle = {
        backgroundColor: '#343A40'
    }


    return (
        <div className='container-fluid mt-5 footer' style={footstyle}>
            <div className='row justify-content-around text-center text-white'>
                <div className='col-3 mt-3 mb-3'>
                    <h3>Firts Steps in React</h3>
                </div>   
                <div className='col-3 mt-2 mb-2'>
                </div> 
                <div className='col-3 mt-2 mb-2'>
                    <p>Author: Gabriel Gutierrez</p>
                    <a href='mailto:gabrie.ares93@gmail.com'>Send me a Email</a>
                </div>     
            </div>      
        </div>
    )
}

export default Footer
