import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import Home from './Pages/Home'
// import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About'
import Appointments from './Pages/Appointments'
import Contact from './Pages/Contact'
import MyProfile from './Pages/MyProfile'
import MyAppointment from './Pages/MyAppointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
 import Doctors from './Pages/Doctors'
import MyCheckup from './Pages/MyCheckup'



const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
     
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/doctors" element={<Doctors/>} />
    <Route path="/doctors/:speciality" element={<Doctors/>} />
    <Route path="/login" element={< Login/>} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/My-profile" element={<MyProfile />} />
    <Route path="/my-appointment" element={<MyAppointment />} />
    {/* <Route path='/myappointments' element={<MyAppointment/>} /> */}
    <Route path = '/My-Checkup' element = {<MyCheckup/>} />
    <Route path="/appointment/:docId" element={<Appointments />} />
   </Routes>
  
   <Footer />
    </div>
  )
}

export default App