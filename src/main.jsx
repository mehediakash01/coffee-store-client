import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/router'
import { RouterProvider } from 'react-router'
import store from './redux/store'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} store={store} />
  </StrictMode>,
)
