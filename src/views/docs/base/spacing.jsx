const spacing = [
	'0',
	'px',
	'0.5',
	'1',
	'1.5',
	'2',
	'2.5',
	'3',
	'3.5',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'10',
	'11',
	'12',
	'14',
	'16',
	'20',
	'24',
	'28',
	'32',
	'36',
	'40',
	'44',
	'48',
	'52',
	'56',
	'60',
	'64',
	'72',
	'80',
	'96',
]

export default function Spacing() {
	return (
		<>
			<h2 className='fw-bold fs-20'>Espaciado</h2>
			<p>Jaywork tiene su propia colección de espaciados que pueden ser usados en propiedades como padding, margin, width, height, etc.</p>

			<p>Para usar un espaciado simplemente agrega el prefijo de la propiedad seguido de un "-" y el expaciado ejem: p-24.</p>

			<section className='flex flex-column gap-3'>
				<header className='flex justify-evenly'>
					<p className='w-48'>class</p>
					<p className='w-48'>size</p>
					<p className='w-48'>px</p>
					<p className='none w-full md:block'></p>
				</header>
				{spacing.map((space, index) => {
					const rem = space !== 'px' ? space / 4 : '1px'
					const px = space !== 'px' ? rem * 16 + 'px' : '1px'
					return (
						<div className='flex justify-evenly' key={index}>
							<p className='flex w-20 text-primary'>{space}</p>
							<p className='flex w-20 text-primary'>{space  !== '0' ? rem : '0px'}</p>
							<p className='flex w-20 text-primary'>{px}</p>
							<div className='none w-full md:block'>
								<div className={`w-${space} h-full rounded-4 bg-primary`}></div>
							</div>
						</div>
					)
				})}
			</section>
		</>
	)
}
