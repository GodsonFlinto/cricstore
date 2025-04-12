import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { getInitials } from '@navin0507/string-utilsmns';
import { ShopContext } from '../../Context/ShopContext';
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);
  const [user] = useState("GodSon Flinto");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>Cric Store</p>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <FaBars size={24} />
      </div>

      <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <li onClick={() => setMenu("shop")}>
          <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
            Home
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to='/mens' style={{ textDecoration: 'none', color: 'black' }}>
            Jerseys
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to='/womens' style={{ textDecoration: 'none', color: 'black' }}>
            Accessories
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids' style={{ textDecoration: 'none', color: 'black' }}>
            Equipment
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <span className='user-initials' title={user}>
          {getInitials(user)}
        </span>
        <Link to='/login' className='login-btn'>Logout</Link>
        <Link to='/cart'><img src={cart_icon} alt='cart' /></Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
};
