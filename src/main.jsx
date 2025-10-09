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
import AboutReview from './Components/About/AboutReview.jsx'
import AboutHome from './Components/About/AboutHome.jsx'
import AboutStory from './Components/About/AboutStory.jsx'
import AboutInside from './Components/About/AboutInside.jsx'
import Footer from './Components/Footer/Footer.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path='/' element={<Layout/>}>
      <Route path='' element ={<App/>} />
      <Route path='about' element ={
        <>
        <AboutHome/> 
        <AboutReview/>
        <AboutStory/>
        <AboutInside/>
        </>
    }/>
      <Route path='contact-us' element ={<Contact/>} />
      <Route path='courses' element ={<Courses/>}/>
    </Route> 
      <Route path='account' element ={<Login/>} />
      <Route path='create-account' element ={<CreateAccount/>} />
    </>                                                          
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
