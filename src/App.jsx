import './App.css'
import About from './components/About'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Services from './components/Services'
import Tools from './components/Tools'

function App() {

  return (
    <div  className=''>
    <HeroBanner/>
    <About/>
    <Tools/>
    <Services/>
    </div>
  )
}

export default App
