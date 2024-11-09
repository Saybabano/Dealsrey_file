import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import FormValidation from './COMPONANTS/FormValidation'
import Navbar from './COMPONANTS/Navbar'
import Home from './COMPONANTS/Home';
import Employee from './COMPONANTS/Employee';

export default function App() {
  const location = useLocation(); // Get the current route location

  return (
    <>
      {/* Render Navbar only if the current route is not '/' */}
      {location.pathname !== '/' && <Navbar />} 

      <Routes>
        <Route path='/' element={<FormValidation />} />
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Employee' element={<Employee/>}/>

      </Routes>
    </>
  )
}

