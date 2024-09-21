import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Accordion from "./components/Accordion"
import './components/Accordion.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Accordion/>
  </StrictMode>,
)
