import React from 'react'
import Bookingmange from '../../Components/BookingTable'
import Headeradmin from '../headeradmin'
import Footeradmin from '../../Components/footeradmin'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
<div className="container col-xxl-8">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://firebasestorage.googleapis.com/v0/b/pizza-f208b.appspot.com/o/mainimg%2FHawaiian%20Pizza-Photoroom.png-Photoroom-Photoroom.png-Photoroom.png?alt=media&token=7ad9c479-593b-433c-abb5-98431cc22f68" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/pizza-f208b.appspot.com/o/mainimg%2FSeafood%20Pizza-Photoroom.png-Photoroom-Photoroom.png-Photoroom.png?alt=media&token=02cf2ba6-7faf-4f53-a9a5-fd603f9f0785" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/pizza-f208b.appspot.com/o/mainimg%2FSpicy%20Pizza-Photoroom.png-Photoroom-Photoroom.png-Photoroom.png?alt=media&token=a00b6cd8-a027-4550-b0af-24a5fb7a03b8" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome To</h1>
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">PizzaKub</h1>
        <p className="lead">ยินดีต้อนรับสู่แหล่งรวมพิซซ่าที่อร่อยที่สุด! 
PizzaKabเป็นร้านอาหารพิซซ่าที่มีคุ้มค่าแก่การลอง </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link  to="/menu" type="button" className="btn btn-lg px-4 me-md-2" style={{ backgroundColor: '#FF8303', color: 'white' }}>Order</Link>
          <Link to="/booking" type="button" className="btn btn-outline-secondary btn-lg px-4">Booking</Link>
        </div>
      </div>
    </div>
  </div>
    </>
)
}

export default Main