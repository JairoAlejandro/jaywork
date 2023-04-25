import { NavLink } from 'react-router-dom'
import { spacing } from '../../../config'
import ShowMore from '../../../components/show-more'

const directions = [
    {
        cssClass: 'gap',
        property: 'gap'
    },
    {
        cssClass: 'gap-row',
        property: 'row-gap'
    },
    {
        cssClass: 'gap-column',
        property: 'column-gap'
    }
]

const Property = ({cssClass, prop, value}) => {
    return cssClass && prop && value ?
    (
        <div className='flex'>
            <p className='fs-14 w-48'>{cssClass}</p> 
            <p className='fs-14 w-48'>{prop}:{value}</p> 
        </div>
    )
    : ':('
}

export default function Gap(){

    return(
        <>
            <h2 className='fs-20 fw-bold'>Gap</h2>
            <p>Esta clase te permite cambiar la propiedad gap de un elemento, esta clase utiliza la <NavLink to='/docs/spacing' className='text-primary'>libreria de espaciado</NavLink > y el <NavLink to='/docs/breakpoints' className='text-primary'>sistema de breakpoints</NavLink> para hacerla completamente responsive.</p>
            <ShowMore>
                {
                    directions.map(({cssClass, property})=>
                    spacing.map((space,index)=>
                    {
                        const className = `${cssClass}-${space}`
                        
                        const value = space === '0' ?  '0px' : space !== 'px' ? space * 4 + 'px' : '1px'
                        
                        return <Property key={index} cssClass={className} prop={property} value={value}/>
                    } 
                    ))
                }
            </ShowMore>
        </>
    )
}