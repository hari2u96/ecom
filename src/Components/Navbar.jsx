import React from 'react'
import "./Navbar.css"
import { ShoppingBag } from "phosphor-react"
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to ="/" className='logo'>Shopify</Link>
        <div className='links'>
            
          <Link to ="/">Shop</Link>
          <Link to ="/cart">
          <ShoppingBag size={32} />
          </Link>
        </div>
        </div>
  )
}
