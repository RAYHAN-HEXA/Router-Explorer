import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import About from './Pages/About/About.jsx'
import Rootlayout from './Layout/RootLayOut/Rootlayout.jsx'
import CardDetails from './Pages/CardDetails/CardDetails.jsx'



 
 
const router = createBrowserRouter([
 {
  path : '/',
  Component : Rootlayout,
  children : [
     {
    index : true,
    Component : Home,
    loader : () => fetch('https://openapi.programming-hero.com/api/plants')
   
  },
      {
    path:'/home',
    Component : Home,
     loader : () => fetch('https://openapi.programming-hero.com/api/plants')
  },
  {
    path : '/contact',
    Component : Contact
  },
{
  path : '/about',
  Component : About
},
{
  path : '/plant/:id',
  Component : CardDetails, 
},
  ]
 
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
