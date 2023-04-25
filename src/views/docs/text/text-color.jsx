import { NavLink } from 'react-router-dom'
import { colors } from '../../../config'

export default function TextColor(){
	return (
		<div className='flex flex-column gap-3'>
			<h2>Text color</h2>
			<p>Esta clase utiliza la <NavLink className='text-primary' to='/docs/colors'>biblioteca de colores</NavLink> de nextia para cambiar el color del texto, ejem: text-{"\{color\}"}</p>

            <div className='grid gap-3 sm:cols-2 md:cols-3'>
                {
                    colors.map((color,index)=>{
                        return <p key={index} className={`rounded p-4 bg-surface text-${color.name}`}>text {color.name}</p>
                    })
                }
            </div>
		</div>
	)
}
