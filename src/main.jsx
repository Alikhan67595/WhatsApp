import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient() 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Provider store={store}>
      <QueryClientProvider client={queryClient}>  
      <App />
      </QueryClientProvider>
     </Provider>
    </BrowserRouter>
  </StrictMode>,
)
