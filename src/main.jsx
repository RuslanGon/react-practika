import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'normalize.css'
// import App from './App.jsx'
import AppHTTPRequest from './AppHTTPRequest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppHTTPRequest />
  </StrictMode>,
)
