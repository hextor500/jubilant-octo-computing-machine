import { useState } from 'react'
import './App.css'
import RouterIndex from './routes/RouterIndex'
import HolaMundoComponent from './components/HolaMundoComponent'
import { BrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter>
      
      <HolaMundoComponent nombre='Diana' colores={['Verde', 'Rojo', 'Azul']} />
      <HolaMundoComponent nombre='Hector'colores={['Blanco', 'Verde', 'Amarillo']}/>
      <HolaMundoComponent nombre='Juan Pablo' colores={['Rosa', 'Morado', 'Violeta']}/>
    </>
  )
}

export default App
