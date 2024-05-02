import React from 'react'
import Navbar from '../../Components/user/headeruser'
import Headeradmin from '../../Components/headeradmin'
import Main from '../../Components/user/main'
import Footer from '../../Components/user/foooter'
import Formbooking from '../../Components/user/formbooking'

const Bookingpage = () => {
  return (
    <>
    <Navbar />
    <Formbooking />
    <Footer />  
    </>
    
  )
}

export default Bookingpage;