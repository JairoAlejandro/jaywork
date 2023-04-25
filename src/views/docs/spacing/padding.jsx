import { NavLink } from 'react-router-dom'
import { spacing } from '../../../config'
import ShowMore from '../../../components/show-more'

const props=[
    {
        cssClass: 'p',
        property: ['padding']
    },
    {
        cssClass: 'py',
        property: ['padding-top','padding-botom']
    },
    {
        cssClass: 'px',
        property: ['padding-right','padding-left']
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
        cssClass: `p${cssClass}`, 
        property: [`padding-${property}`]
    })
})

export default function Padding(){
    return(
        <>
            <h2 className='fs-20 fw-bold'>Padding</h2>
            <p>Esta propiedad te permite cambiar el padding de un elemento, esta clase utiliza la <NavLink to='/docs/spacing' className='text-primary'>libreria de espaciado</NavLink > y el <NavLink to='/docs/breakpoints' className='text-primary'>sistema de breakpoints</NavLink> para hacerla completamente responsive</p>
            <ShowMore>
                {
                    props.map(({cssClass, property} )=>
                        spacing.map((space, i)=>{
                            const value = space !== 'px'  ? space * 4 : '1'

                            return(
                                <div key={i} className='grid cols-2'>
                                    <p className='fs-14'>{cssClass}-{space}</p>
                                    {
                                        property.length <= 1 ? 
                                        <p className='fs-14'>{property}: {value}px</p> :
                                        <div className='flex gap-3'>
                                            {
                                                property.map((prop, index)=>{
                                                    return(
                                                        <p key={index} className='fs-14'>{prop}: {value}px</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                </div>
                            )
                        })
                    )
                }
            </ShowMore>            
        </>
    )
}