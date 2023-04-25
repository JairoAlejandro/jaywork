import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Home from './views/home'
import NotFound from './views/notFound'
import Docs from './views/docs'
import Downloads from './views/downloads'

import Start from './views/docs/start'
import Breakpoints from './views/docs/base/breakpoints'
import Colors from './views/docs/base/colors'
import Spacing from './views/docs/base/spacing'
import TextColor from './views/docs/text/text-color'
import FontSize from './views/docs/text/font-size'
import Gap from './views/docs/spacing/gap'
import Padding from './views/docs/spacing/padding'
import Margin from './views/docs/spacing/margin'

export default function App(){
    return(
        <BrowserRouter>
            <div className='flex flex-column h-screen'>
                <Header />
                <main className='flex flex-column h-full overflow-hidden'>
                    <Routes>
                        <Route path='*' element={<NotFound/>}/>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/downloads' element={<Downloads/>}/>
                        <Route path='/docs' element={<Docs/>}>
                            <Route index element={<Navigate to='colors'/>}/>
                            <Route path='colors' element={<Colors/>}/>
                            <Route path='breakpoints' element={<Breakpoints/>}/>
                            <Route path='spacing' element={<Spacing/>}/>

                            <Route path='text-color' element={<TextColor/>}/>
                            <Route path='font-size' element={<FontSize/>}/>

                            <Route path='padding' element={<Padding/>}/>
                            <Route path='margin' element={<Margin/>}/>
                            <Route path='gap' element={<Gap/>}/>
                        </Route>
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    )
}