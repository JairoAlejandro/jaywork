import { BsPalette2 as Colors} from 'react-icons/bs'

export default function Start(){
    return(
        <div>
            <h2>Empecemos</h2>
            <div className='flex flex-column gap-4 p-4 bg-surface rounded'>
                <Colors className='fs-32'/>
                <p>color</p>
            </div>
        </div>
    )
}