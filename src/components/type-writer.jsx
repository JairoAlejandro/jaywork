import { useState, useEffect } from 'react'


export default function TypeWriter({data}){
    const [ text , setText ]  = useState('')
    const [ currentText , setCurrentText ] = useState(data ? data : [])
    const [ textIndex , setTextIndex ] = useState(0)

    const words = ['text 1', 'text 2', 'text 3']

    const write = () => {
        console.log(text)
    }
    
    const clear = () => {}
    
    useEffect(()=>{
        setText(data[textIndex])
        write()
    },[])
    
    return(
        <span className='fs-20 fw-bold'>{text}</span>
    )
}