

export default function NotFound(){
    const back  = () => history.back()
    return(
        <div className='flex flex-column justify-center align-center gap-3 h-full'>
            <h1 className='fs-64 fw-bold '>404</h1>
            <p className='fs-20'>not found <span className='font-emoji'>🙁</span></p>
            <button className='bg-surface rounded py-2 px-4' onClick={back}>volver</button>
        </div>
    )
}