import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { getInitials } from '@navin0507/string-utilsmns'

export const Navbar = () => {

  const[ menu,setMenu] = useState("shop");
  const [user, setuser] = useState("GodSon Flinto")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>Cric Store</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Jerseys</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='womens'>Accessories</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='kids'>Equipment</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart' >
            <Link to='/login' className='login-btn'>Login</Link>
            <Link to='/cart'><img src={cart_icon} alt=''/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
