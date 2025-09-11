import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Login from './Components/Account/Login.jsx'
import CreateAccount from './Components/Account/CreateAccount.jsx'
import Courses from './Components/Courses/Courses.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path='/' element={<Layout/>}>
      <Route path='' element ={<App/>} />
      <Route path='contact-us' element ={<Contact/>} />
    </Route> 
      <Route path='contact' element ={<Login/>} />
      <Route path='careers' element ={<Courses/>} />
      <Route path='create-account' element ={<CreateAccount/>} />

    </>                                                          
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
