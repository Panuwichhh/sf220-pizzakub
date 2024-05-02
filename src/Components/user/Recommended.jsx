import React from 'react'

function Recommended() {
    return (
        <>
            <div className="container mt-3">
                <h1 className="display-5 fw-bold mb-3">Recommended</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
                    <div className="card">
                        <img src="https://firebasestorage.googleapis.com/v0/b/pizza-f208b.appspot.com/o/mainimg%2Fmenu%2Fclassic%20pizza.jpg?alt=media&token=8e0ab2af-e84c-4726-96aa-c4bbff879874" alt="xxx" className="card-img-top"></img>
                        <div className="card-body text-center">
                            <h2 className="card-text" > Hawaiian Pizza </h2>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://firebasestorage.googleapis.com/v0/b/pizza-f208b.appspot.com/o/mainimg%2Fmenu%2FCreamy%20Sauce%20Pizza.jpg?alt=media&token=37cf2225-109b-47ab-a1ea-8b5cd8bee4df" alt="xxx" className="card-img-top"></img>
                        <div className="card-body text-center">
                            <h2 className="card-text" > Margherita Pizza </h2>
                            <p className="card-text"></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://firebasestorage.googleapis.com/v0/b/pizza-f208b.appspot.com/o/mainimg%2Fmenu%2Fclassic%20pizza.jpg?alt=media&token=8e0ab2af-e84c-4726-96aa-c4bbff879874" alt="xxx" className="card-img-top"></img>
                        <div className="card-body text-center">
                            <h2 className="card-text" > Spicy Pizza </h2>
                            <p className="card-text"></p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Recommended