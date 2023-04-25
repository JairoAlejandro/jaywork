import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { spacing } from '../../../config'
import ShowMore from '../../../components/show-more'
const props=[
    {
        cssClass: 'm',
        property: ['margin']
    },
    {
        cssClass: 'my',
        property: ['margin-top','margin-botom']
    },
    {
        cssClass: 'mx',
        property: ['margin-right','margin-left']
    },
]

const directions = [
	{
		cssClass: 't',
		property: 'top',
	},
    {
		cssClass: 'b',
		property: 'bottom',
	},
    {
		cssClass: 'r',
		property: 'right',
	},
    {
		cssClass: 'l',
		property: 'left',
	},
]

directions.map(({cssClass, property})=>{
    props.push({
        cssClass: `m${cssClass}`, 
        property: [`margin-${property}`]
    })
})

export default function Margin() {
    const [showMore,setShowMore] = useState(false)
    return (
        <>
			<h2>Margin</h2>
            <p>Esta propiedad te permite cambiar el margin de un elemento, esta clase utiliza la <NavLink to='/docs/spacing' className='text-primary'>libreria de espaciado</NavLink > y el <NavLink to='/docs/breakpoints' className='text-primary'>sistema de breakpoints</NavLink> para hacerla completamente responsive</p>
            <ShowMore>
                {
                    props.map(({ cssClass , property })=>
                    spacing.map((space, index)=>{
                        const spaceValue = space === 'px' ? '1' : space ==='0' ?  '0' : space * 4
                        const className = `${cssClass}-${space}`
                        const value = `${property}:${spaceValue}px`
                        
                        if (property.length > 1){
                            return(
                                <div key={index} className='grid cols-2 max-w-96'>
                                    <p className='fs-14'>{className}</p>
                                    <div className='flex gap-2'>
                                        {
                                            property.map(( prop , i) => 
                                                <p key={i} className='fs-14'>{prop}:{spaceValue}</p>)
                                        }
                                    </div>
                                </div>
                        )}
                        else{
                            return (
                                <div key={index} className='grid cols-2 max-w-96'>
                                    <p className='fs-14'>{className}</p>
                                    <p className='fs-14'>{value}</p>
                                </div>
                            )
                        }
                    }))
                }
            </ShowMore>
            
		</>
	)
}
