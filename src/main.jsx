import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Global } from '@emotion/react'
import { GlobalStyle } from './style/globalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Global styles={GlobalStyle}/>
    <App />
  </React.StrictMode>,
)
