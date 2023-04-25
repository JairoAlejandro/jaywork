
const breakpoints = [
    {
        prefix: 'sm',
        value: '640px'
    },
    {
        prefix: 'md',
        value: '768px'
    },
    {
        prefix: 'lg',
        value: '1024px'
    },
    {
        prefix: 'xl',
        value: '1280px'
    },
]

export default function Breakpoints(){
	return (
		<>
			<h2 className='fw-bold fs-20'>Breakpoints</h2>
            <p>jaywork usa varios breakpoints para el responsive design, para utilizar una propiedad responsive solo tiene que utilizar el prefijo del breakpoint seguido de un guion y la propiedad , ejem: sm:padding-2.</p>
            
            <section className='flex flex-column gap-3'>
                <header className='flex'>
                    <p className='fw-semibold w-24'>Prefijo</p>
                    <p className='fw-semibold w-48'>breakpoint</p>
                </header>

                {
                    breakpoints.map(({prefix, value},index)=>{
                        return(
                            <div key={index} className='flex'>
                                <p className='w-24 text-primary'>{prefix}</p>
                                <p className='w-48'>{value}</p>
                            </div>
                        )
                    })
                }
                
            </section>
		</>
	)
}
