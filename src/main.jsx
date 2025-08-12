import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './route/router.jsx'
import ScrollProvider from './components/ScrollProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
      <RouterProvider router={router}></RouterProvider>
   

  </StrictMode>,
)
