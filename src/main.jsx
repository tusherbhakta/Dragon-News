import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-[1920px] mx-auto px-4'>
   <RouterProvider router={router}></RouterProvider>
   </div>
  </StrictMode>,
)
