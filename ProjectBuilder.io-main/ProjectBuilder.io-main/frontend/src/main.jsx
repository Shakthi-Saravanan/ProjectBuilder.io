import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Headbar from './Component/Headbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headbar></Headbar>
    <App />
  </React.StrictMode>,
)
