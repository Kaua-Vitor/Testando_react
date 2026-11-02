import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mania from './Funcoes.jsx'
import { Titulo, Corpo, Imagens } from './Funcoes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo/>
    <Mania />
    <Imagens/>
  </StrictMode>,
)
