import React from 'react'
import './Nav.css';
import { useEffect, useState } from 'react';



function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 500 ? handleShow(true) : handleShow(false) // event listener for header
        })
    }, ([])
    )
    console.log(show)


    return (
        <div className={`nav ${show  && "nav-black"}`}>
            <img className='logo' src='netflix.png'>
            </img>

        </div>
    )
}

export default Nav