import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppContextProvider } from './store/context'
import { ToastContainer } from 'react-toastify'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AppContextProvider>
        <App />
        <ToastContainer/>
    </AppContextProvider>

  //  </React.StrictMode>,
)
