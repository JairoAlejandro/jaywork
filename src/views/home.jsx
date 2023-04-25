import TypeWriter from '../components/type-writer'

export default function Home() {
	return (
		<div className='flex flex-column justify-center h-full gap-3 p-6 md:p-12'>
			<h2 className='fs-24 fw-bold md:text-center md:fs-32'>Bienvenido a <span className='text-primary'>jaywork</span>, vamos a empezar un nuevo <span className='text-primary'>proyecto</span>.</h2>
			
			<p className='md:text-center'>Jaywork es un framework front-end responsive con dark mode incorporado y completamente personalizable usando variables css.</p>
		</div>
	)
}
