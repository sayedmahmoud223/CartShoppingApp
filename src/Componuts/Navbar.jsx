import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar({ renderQuantity, renderPrice }){
    
    
        return <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link active" aria-current="page">Home</NavLink>
                        </li>
                        
                    </ul>
                    <ul className="navbar-nav ms-auto pe-5 mb-2 mb-lg-0">

                            <li className="nav-item">
                                <div><h3 className='text-white'>{renderPrice.toFixed(2)}$</h3></div>
                        </li>
                            <li className="nav-item position-relative">
                            <NavLink to={"cart"} className="nav-link active" aria-current="page" >Cart</NavLink>
                                <div className='badge pos bg-info position-absolute'>{renderQuantity}</div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>



        </>
    
}
