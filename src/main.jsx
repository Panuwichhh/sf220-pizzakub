import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Formbooking from './Components/user/formbooking'
import App from './Components/user/formbooking'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  AbortedDeferredError,
} from "react-router-dom";

import Bookingmange from './Components/BookingTable'
import Headeradmin from './Components/headeradmin'
import Bookingadminpage from './pages/admin/Bookingmangepage'
import Home from './pages/customer/home'
import Homeadmin from './pages/admin/Homeadmin'
import ErrorPage from './pages/errorpage'
import AddMenu from './Components/addmenu'
import Menu from './Components/user/menu'
import MenuPage from './pages/customer/menupage'
import Bookingpage from './pages/customer/booking'
import AdminHome from './Components/adminhome'
import MenuManage from './Components/menuTable '
import Menuadmin from './pages/admin/Menuadmin'
import Receipt from './Components/user/Orders'
import Oderadmin from './pages/admin/Orderadmin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Homeadmin />,
  },
  {
    path: "/bookingadmin",
    element: <Bookingadminpage />,
  },
  {
    path: "/booking",
    element: <Bookingpage />,
  },
  {
    path: "/addmenu",
    element: <AddMenu />,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/menuadmin",
    element: <Menuadmin />,
  },
  {
    path: "/receipt",
    element: <Receipt />,
  },
  {
    path: "/oderadmin",
    element: <Oderadmin />,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
