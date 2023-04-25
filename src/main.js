import {createRoot} from 'react-dom/client'
import App from './app'
import './sass/nextia.scss'

window.addEventListener('DOMContentLoaded',()=> {
    createRoot(document.getElementById('root')).render(<App/>)
})