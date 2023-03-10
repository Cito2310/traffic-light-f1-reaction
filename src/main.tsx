import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import { ProviderApp } from './provider/ProviderApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProviderApp>
      <App />
    </ProviderApp>
  </React.StrictMode>
)
