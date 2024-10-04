import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemProvider from './components/context/ThemProvider'; //add ThemProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemProvider>
    <App />
  </ThemProvider>
  // </React.StrictMode>,
)
