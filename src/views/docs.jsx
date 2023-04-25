import { useState, useEffect, useRef } from 'react'
import { NavLink , Outlet } from 'react-router-dom'

export default function Docs(){
    const menuRef = useRef(null)
    const [menuIsOpen, setMenuIsOpen] = useState(true)

    const handleNav = ({isActive}) => isActive  ? 'text-primary' : 'text-grey'

    const handleMenu = () => {document.body.clientWidth >= 720 ? setMenuIsOpen(true) : setMenuIsOpen(false)}

    window.addEventListener('resize', handleMenu)

    useEffect(()=>{
        handleMenu()

    },[menuIsOpen])

    return(
        <div className='flex h-full'>
            <aside ref={menuRef} className={`flex flex-column w-48 gap-2 p-3 rounded-tr-12 overflow-y-auto bg-surface`}>

                <p className='fw-bold'>Base</p>
                <NavLink to='colors' className={handleNav}>Colors</NavLink>
                <NavLink to='breakpoints' className={handleNav}>Breakpoints</NavLink>
                <NavLink to='spacing' className={handleNav}>Espaciado</NavLink>
                <p className='fw-bold'>Texto</p>
                <NavLink to='text-color' className={handleNav}>Text color</NavLink>
                <NavLink to='font-size' className={handleNav}>Font size</NavLink>
                <p className='fw-bold'>Spacing</p>
                <NavLink to='padding' className={handleNav}>Padding</NavLink>
                <NavLink to='margin' className={handleNav}>Margin</NavLink>
                <NavLink to='gap' className={handleNav}>Gap</NavLink>

            </aside>
            <main className='flex flex-column w-full p-6 gap-3 overflow-y-auto'>
                <Outlet/>
            </main>
        </div>
    )
}