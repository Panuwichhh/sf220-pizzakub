import React from 'react'

function main() {
    return (
        <>
        <div className="position-relative overflow-hidden p-3 m-md-3 text-center background-imag">
        <div className="col-md-6 p-lg-5 mx-auto my-0">
          <h1 className="display-3 fw-bold" style={{ color: '#FF8303' }}>BOKKKING</h1>
        </div>

        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="card">
              <img src="https://img.freepik.com/free-vector/flat-sale-background_23-2147750048.jpg?t=st=1714114643~exp=1714118243~hmac=6d21efac16d68d5e0accd6e28dbc8f7565dbf519e9423d791ac9ab1c61f54ca8&w=826" alt="xxx" className="card-img-top"></img>
              <div className="card-body">
                <div className="d-flex">
                    <button className='btn btn-danger m-2'><i class="bi bi-calendar-check"></i>10:00-11:00</button>
                    <button className='btn btn-danger m-2'><i class="bi bi-calendar-check"></i>11:00-12:00</button>
                    <button className='btn btn-danger m-2'><i class="bi bi-calendar-check"></i>12:00-13:00</button>
                </div>
                <hr/>
                <div className="d-flex">
                    <div className='d-flex'>
                    <i class="bi bi-person fs-3"></i><div className="fs-3">6</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default main