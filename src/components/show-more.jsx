import { useState } from "react"


export default function ShowMore ({children, isShow}){
    const [showMore, setShowMore] = useState(isShow)
    
    const handleShowMore = () => setShowMore(!showMore)

    //${showMore ? 'h-full' : 'h-64'}
    return(
            <div className={`relative flex flex-column align-center  ${showMore ? 'h-fit' : 'h-64'}`}>
                <div className={`w-full overflow-y-scroll`}>
                    {children}
                </div>
                <button className={`${showMore ? 'fixed bottom-2' : 'static'} rounded px-4 py-2 text-dark`} onClick={handleShowMore}>
                    <p>{showMore ? 'Mostrar menos' : 'Mostrar mas'}</p>
                </button>
            </div>
    )
}