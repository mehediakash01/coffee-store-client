import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/router'
import { RouterProvider } from 'react-router'
import AuthProvider from './Components/Context/AuthProvider'
import { Toaster } from 'react-hot-toast'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider >
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)