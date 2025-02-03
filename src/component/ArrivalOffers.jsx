import React from 'react'

export default function ArrivalOffers() {
    return (
        <div className='arrival'>
            <div className="container">
                <h2 className="heading-min">Arrivals & Offers</h2>
                <div className="arrNoffer">
                    <div className="left">
                        <div className="text">
                            <img src="/daawat.png" alt="" />
                            <button>Cook Exotic Dishes</button>
                            <h2>Get 20% off</h2>
                        </div>
                        <div className="img">
                            <img src="/daawat-rice.png" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="text">
                            <img src="/india-gate.png" alt="" />
                            <button>World's No.1 Rice</button>
                            <h2>Upto 40% off</h2>
                        </div>
                        <div className="img">
                            <img src="/india-rice.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
