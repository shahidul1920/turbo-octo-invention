import React from 'react'

export default function Services(services) {

    return (
        <div className="servs">
            <div className='container'>
                <h2>Services</h2>
                <div className="services flex flex-cn">
                    {services.services.map((service) => (
                        <div className="service" key={service.id}>
                            <div className="icon">
                                <img src={service.image} alt="" />
                            </div>
                            <div className="text">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
