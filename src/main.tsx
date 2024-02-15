import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './app/layout'
import './styles/tailwind.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
)
