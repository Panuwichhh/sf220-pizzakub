import React from 'react'
import Bookingmange from '../../Components/BookingTable'
import Headeradmin from '../../Components/headeradmin'
import Footeradmin from '../../Components/footeradmin'
import AdminHome from '../../Components/adminhome'
import AddMenu from '../../Components/addmenu'
import Footer from '../../Components/user/foooter'
import Oders from '../../Components/user/Orders'

const Oderadmin = () => {
  return (
    <>
    <Headeradmin/>
    <Oders />
    <Footer />
    </>
)
}

export default Oderadmin