import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// BrowserRouter
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* browser router to all pages */}
  
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </StrictMode>,
)
