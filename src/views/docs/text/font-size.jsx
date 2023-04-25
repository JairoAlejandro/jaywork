const sizes = ['12', '14', '16', '20', '22', '24', '32', '48', '52', '64', '72', '96']

export default function FontSize(){
    return(
        <>
            <h2 className='fs-20 fw-bold'>Font size</h2>

            <p>Con esta clase puede cambiar el tamaño de un texto.</p>

            <p>Acontinuación se muestran todas las clases disponibles por ahora.</p>

            <section>
                <header className='flex fw-semibold'>
                    <p className='w-16'>class</p>
                    <p>size</p>
                </header>
                <article className='flex flex-column gap-3'>
                {
                    sizes.map(( size, index )=>{
                        return(
                            <div key={index} className='flex'>
                                <p className='w-16 text-primary'>fs-{size}</p>
                                <p className='text-grey'>{size}px</p>
                            </div>
                        )
                    })
                }
                </article>
            </section>
        </>
    )
}