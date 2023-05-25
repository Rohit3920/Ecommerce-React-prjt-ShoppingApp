import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, ShoppingCart } from 'phosphor-react'
import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar-com'>

            <div className='links'>
                <Link to='/' ><ShoppingBag size={30} /></Link>
                <Link to='/cart' ><ShoppingCart size={30} /></Link>
            </div>

        </div>
    )
}

export default NavBar
