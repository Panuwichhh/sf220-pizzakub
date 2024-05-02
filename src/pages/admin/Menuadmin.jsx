import React from 'react'
import Bookingmange from '../../Components/BookingTable'
import Headeradmin from '../../Components/headeradmin'
import Footeradmin from '../../Components/footeradmin'
import AdminHome from '../../Components/adminhome'
import MenuManage from '../../Components/menuTable '
import AddMenu from '../../Components/addmenu'
import Footer from '../../Components/user/foooter'

const Menuadmin = () => {
  return (
    <>
    <Headeradmin/>
    <AddMenu />
    <MenuManage />
    <Footer />
    </>
)
}

export default Menuadmin