import React, {useState, useEffect, useRef} from 'react'
import {evaluate} from 'mathjs'

function Calculator() {

    const h1style = {
        height: '40px'
    }

    function PCal (stringA) {
        var ValA = 0
        var ValB = 0
        try{ ValA = stringA.split('(').length - 1 }catch{}
        try{ ValB = stringA.split(')').length - 1 }catch{} 
        return ValA-ValB
    }

    const [calculo, setCalculo] = useState('')
    const [resultado, setResultado] = useState('')

    let Operadores = ['+','*','/','%','^','-']

    const buttref = useRef(null)
    const buttrefA = useRef(null)
    const buttrefB = useRef(null)
    const buttrefC = useRef(null)
    const buttrefD = useRef(null)
    const buttrefE = useRef(null)
    const buttrefF = useRef(null)
    const buttrefG = useRef(null)
    const buttrefH = useRef(null)

    useEffect( () => {
        if (calculo===''){
            buttrefA.current.disabled = true
            buttrefB.current.disabled = true
            buttrefC.current.disabled = true
            buttrefD.current.disabled = true
            buttrefE.current.disabled = true
            buttrefF.current.disabled = true
            buttrefG.current.disabled = true
        }else{
            buttrefA.current.disabled = false
            buttrefB.current.disabled = false
            buttrefC.current.disabled = false
            buttrefD.current.disabled = false
            buttrefE.current.disabled = false
            buttrefF.current.disabled = false
            buttrefG.current.disabled = false
        }

        try {
            var lastnumber = calculo.split('+')
            if(lastnumber[lastnumber.length-1].includes('.')){
                buttref.current.disabled = true
            }else{
                buttref.current.disabled = false
            }            
        }catch{}

        ['+','*','/','%','^','-','('].includes(calculo.slice(-1)) || calculo==='' ?
            buttrefH.current.innerHTML = '(':
            buttrefH.current.innerHTML = ')'

    }, [calculo])

    const CalClick = (e) => {   
        
        let idpass = parseInt(e.target.id.split('-')[1])
        var addtoid = 0
        var evalX = false
        var deletelast = false
        if (idpass < 11){
            if (idpass === 10){
                addtoid = '.'
            }else{
                addtoid = idpass
                evalX = true
            } 
        }else{
            if (12<idpass && idpass<18 && calculo.length>1 && Operadores.includes(calculo.slice(-1))) {                    
                deletelast = true
            }
            switch (idpass){
                case 11:    
                    if (buttrefH.current.innerHTML === ')') {
                        if (PCal(calculo)===0) {
                            setCalculo(`(${calculo})`)
                            return
                        }else{
                            addtoid=')'
                        }
                    }else{
                        addtoid='('
                    } 
                    break;
                case 12:
                    addtoid='+'
                    break;
                case 13:
                    addtoid='-'
                    break;
                case 14:
                    addtoid='*'
                    break;
                case 15:
                    addtoid='/'
                    break;
                case 16:
                    addtoid='%'
                    break;
                case 17:
                    addtoid='^'
                    break;
                case 18:  
                    setCalculo(calculo.slice(0, -1))
                    let resV = PCal(calculo.slice(0, -1))
                    var CAL = ''
                    if(Operadores.includes(calculo.slice(-2).slice(0,1))) {
                        CAL = calculo.slice(0,-2)
                    }else{
                        CAL = calculo.slice(0,-1)
                    }
                    for (let i = 0; i < resV; i++){
                        CAL = `${CAL})`                
                    }
                    setResultado(evaluate(CAL))
                    return
                case 19:
                    setCalculo('')
                    setResultado('')
                    return
                default:
                    console.log('error')
            }           
        } 

        var idpassA = `${calculo}${addtoid}`
        deletelast ?
            setCalculo(`${calculo.slice(0, -1)}${addtoid}`):
            setCalculo(idpassA)  
        
        if (evalX){
            let resV = PCal(idpassA)
            for (let i = 0; i < resV; i++){
                idpassA = `${idpassA})`                
            }
            setResultado(evaluate(idpassA))
        }     
    }
        
    return (
        <div className='col-6 mt-5'>
            <h1 className='text-white' align='right' style={h1style}>{resultado}</h1>
            <h4 className='text-white' align='right' style={h1style}>{calculo}</h4>
            <div className='row justify-content-between'>
                <button onClick={CalClick} className='btn btn-lg btn-danger col-2' id='bu-19' ref={buttrefG}>CE</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-16' ref={buttrefF}>%</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-17' ref={buttrefE}>^</button>
                <button onClick={CalClick} className='btn btn-lg btn-danger col-2' id='bu-18' ref={buttrefD}>DEL</button>
            </div>
            <div className='row justify-content-between mt-2'>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-7'>7</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-8'>8</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-9'>9</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-15' ref={buttrefC}>/</button>
            </div>
            <div className='row justify-content-between mt-2'>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-4'>4</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-5'>5</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-6'>6</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-14' ref={buttrefB}>*</button>
            </div>
            <div className='row justify-content-between mt-2'>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-1'>1</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-2'>2</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-3'>3</button>                
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-13'>-</button>
            </div>
            <div className='row justify-content-between mt-2'>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-10' ref={buttref}>.</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-0'>0</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-11' ref={buttrefH}>(</button>
                <button onClick={CalClick} className='btn btn-lg btn-primary col-2' id='bu-12' ref={buttrefA}>+</button>
            </div>
        </div>
    )
}

export default Calculator
