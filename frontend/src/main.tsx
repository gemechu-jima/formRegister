import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalContextProvider from './context/Context.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
    <App />
    </GlobalContextProvider>
  </StrictMode>,
)
