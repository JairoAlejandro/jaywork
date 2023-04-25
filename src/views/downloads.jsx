import { BsDownload as Download } from 'react-icons/bs'

const downloads = [
	{
		name: 'jaywork.css',
		url: `${location.protocol}//${location.host}/jaywork.css`,
	},
	{
		name: 'jaywork.scss',
		url: `${location.protocol}//${location.host}/jaywork.zip`,
	},
]

export default function Downloads() {
	return (
		<div className='flex flex-column gap-3 h-full px-6 md:px-12'>
			<h2 className='fs-20 fw-bold'>Descargas</h2>
			<section className='grid gap-3 sm:gap-6 sm:cols-2 lg:cols-3'>
				{downloads.map(({ name, url },i) => {
					return (
						<div className='flex flex-column rounded p-4 gap-4 bg-surface' key={i}>
							<p className='fw-semibold'>{name}</p>
							<a
								href={url} 
								className='flex justify-center rounded px-4 py-2 gap-2 bg-primary'
								download
							>
								<p>Descargar</p>
								<Download className='fs-24' />
							</a>
						</div>
					)
				})}
			</section>
		</div>
	)
}
