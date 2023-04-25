const colors = [
	{
		name: 'primary',
		className: 'bg-primary',
	},
	{
		name: 'dark',
		className: 'bg-dark text-light',
	},
	{
		name: 'light',
		className: 'bg-light text-dark border border-dark',
	},
	{
		name: 'red',
		className: 'bg-red',
	},
	{
		name: 'orange',
		className: 'bg-orange',
	},
	{
		name: 'yellow',
		className: 'bg-yellow',
	},
	{
		name: 'green',
		className: 'bg-green',
	},
	{
		name: 'blue',
		className: 'bg-blue',
	},
	{
		name: 'sky',
		className: 'bg-sky',
	},
	{
		name: 'indigo',
		className: 'bg-indigo',
	},
	{
		name: 'purple',
		className: 'bg-purple',
	},
	{
		name: 'pink',
		className: 'bg-pink',
	},
	{
		name: 'grey',
		className: 'bg-grey',
	},
]

export default function Colors() {
	return (
		<>
			<h2 className='fw-bold fs-20'>Colores</h2>
            <p>Esta es la biblioteca de colores de jaywork, esta se utilia para cambiar el color de algunas propiedades como text-color, background-color y border-color.</p>
			<div className='grid gap-3 sm:cols-2 md:cols-4 lg:cols-8'>
				{colors.map(({ name, className }, index) => {
					return (
						<div
							key={index}
							className={`flex justify-center p-2 rounded ${className}`}
						>
							<p>{name}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}
