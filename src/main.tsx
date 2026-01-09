import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'   // Global base styles
import './App.css'     // Aapka naya Naukri-style professional CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)