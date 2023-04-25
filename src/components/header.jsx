import { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { BsList as Menu } from 'react-icons/bs'

export default function Header(){
    const menuRef = useRef(null)
    const [ menuIsOpen, setMenuIsOpen ] = useState(false)

    const handleMenu = () => {
        document.body.clientWidth >= 640  
        ? menuRef.current.classList.remove('bg-surface','p-6') : 
        menuRef.current.classList.add('bg-surface','p-6')
    }

    window.addEventListener('resize', handleMenu)

    useEffect(()=>{
        handleMenu()
    },[menuIsOpen])
    
    return(
        <header className='flex justify-between align-center px-6 py-3'>
            <h1 className='fs-24 fw-bold text-primary'>Nextia</h1>
            <nav ref={menuRef} className={`flex flex-column align-center gap-3 fixed h-full top-12 ${menuIsOpen ? 'right-0' : '-right-full'} sm:static sm:flex-row rounded-tl-24`}>
                <a href='/'>Inicio</a>
                <a href='/docs'>Docs</a>
                <a href='/downloads'>Descargas</a>
            </nav>
            <Menu className='fs-32 sm:none' onClick={()=> setMenuIsOpen(!menuIsOpen)}/>
        </header>
    )
}