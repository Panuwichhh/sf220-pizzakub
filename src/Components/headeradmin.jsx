import React from 'react'
import { Link } from 'react-router-dom'


function Headeradmin() {
  return (
<div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" style={{}}>
      <Link to="/admin" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">PizzaKub admin</span>
      </Link>

      <ul className="nav">
        <li className="nav-item"><Link to="/oderadmin" className="nav-link" style={{color: "black"}}>Order</Link></li>
        <li className="nav-item"><Link to="/Bookingadmin" className="nav-link" style={{color: "black"}}>Booking</Link></li>
        <li className="nav-item"><Link to="/menuadmin" className="nav-link" style={{color: "black"}}>Menu</Link></li>
      </ul>
    </header>
  </div>

  )
}

export default Headeradmin