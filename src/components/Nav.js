import React from 'react'
import './Nav.css'
import paw from'../paw-solid.svg'

function Nav() {
    return(
        <div className="header">
            <img src={paw} alt="" />
            <h2 className="logo-words">Paw Prints</h2>
        </div>
    )
}
export default Nav