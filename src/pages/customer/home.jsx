import React from 'react'
import Navbar from '../../Components/user/headeruser'
import Headeradmin from '../../Components/headeradmin'
import Main from '../../Components/user/main'
import Footer from '../../Components/user/foooter'
import Formbooking from '../../Components/user/formbooking'
import Recommended from '../../Components/user/Recommended'

const Home = () => {
  return (
    <>
    <Navbar />
    <Main />
    <Recommended />
    <Formbooking />
    <Footer />  
    </>
    
  )
}

export default Home