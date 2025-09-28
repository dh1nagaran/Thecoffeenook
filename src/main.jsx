import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Media.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { stroe } from './Database/Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

  <Provider store={stroe}>
    <App />
  </Provider>

)
