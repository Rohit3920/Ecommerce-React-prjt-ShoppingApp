import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
                <Link to='/' >HOME</Link>

                <Link to='/cart' >CART</Link>

        </div>
    )
}

export default NavBar
