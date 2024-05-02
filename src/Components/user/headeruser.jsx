import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="d-flex justify-content-center py-3 mb-4 border-bottom " style={{ backgroundColor: '#FF8303' }}>
      <div className="container d-flex align-items-center">
      <Link to="/" className="container d-flex align-items-center  link-body-emphasis text-decoration-none">
        <span className="fs-1" style={{color: 'white'}}>PizzaKub</span>
      </Link>
      <ul className="nav">
        {/* <li className="nav-item"><Link to="/admin" className="nav-link"><i class="bi bi-bag fs-2 "></i></Link></li> */}
      </ul>
      </div>
    </header>
  )
}

export default Navbar