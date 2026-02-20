import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import App from './day-9-Props-Drilling+Context-API/App'
import AIChat from './day-10-useReducer+AI-chat-history/AIChat'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <App /> */}

    <AIChat/>
 
  </StrictMode>,
)
