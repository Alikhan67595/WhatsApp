import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Provider store={store}>
      <App />
     </Provider>
    </BrowserRouter>
  </StrictMode>,
)
