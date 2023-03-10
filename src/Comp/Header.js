import React from 'react';
import { FaFacebookF, FaYoutube, FaTwitter, FaPinterestP, FaInstagram, } from 'react-icons/fa';
import { AiOutlineSearch, AiOutlineShopping, } from "react-icons/ai";
import {CgMenu,CgClose, } from "react-icons/cg";
import "./header.css";
import { Link } from 'react-router-dom';
import img13 from "./img/img13.jpg"

function Header() {
  return (
    <>
      <div className='container-fluid bg-warning-subtle py-3'>
        <div className='container top d-flex justify-content-between align-items-center'>
          <div className='pain '>
            <p className='fs-6'>FREE SHIPPING FOR ORDERS OVER $900</p>
          </div>
          <div className='pain '>
            <ul className='d-flex ttext'>
              <li className='px-3 border-end border-secondary'><Link to="/shipping" class="d">SHIPPING</Link></li>
              <li className='px-3 border-end border-secondary'><Link to="/privacy" class="d">PRIVACY</Link></li>
              <li className='px-3 '><Link to="/support" class="d">SUPPORT</Link></li>
            </ul>
          </div>
          <div className='d-flex gap-4 justify-content-between'>
            <a rel="noreferrer" href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI" target='_blank'><FaFacebookF className='icon fb' /></a>
            <a rel="noreferrer" href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI" target='_blank'><FaTwitter className='icon tw' /></a>
            <a rel="noreferrer" href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI" target='_blank'><FaPinterestP className='icon pin' /></a>
            <a rel="noreferrer" href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI" target='_blank'><FaYoutube className='icon you' /></a>
            <a rel="noreferrer" href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiEo4CJ1ND9AhXHUGwGHa4tCMUQPAgI" target='_blank'><FaInstagram className='icon ins' /></a>
          </div>
        </div>
      </div>
      <div className="container d-flex  justify-content-between align-items-center mb-1">
        <div>
          <Link to="/">
            <img src={img13} width={200} height={150} alt=""/>
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item dropdown">
                <a className="nav-link" href="#">
                  <Link to="/shop" class="d">SHOP</Link>
                </a>
              </li>
            </ul>
            <div className='mobile-navbar-btn'>
              <CgMenu name="menu-outline" className='mobile-nav-icon'/>
              <CgClose name='close-outline' className='mobile-nav-icon close-outline'/>
            </div>
          </div>
        </nav>
        <div className='d-flex justify-content-between align-items-center gap-4'>
          <form className="d-flex position-relative me-4" role="search">
            <input className="form-control" type="search" placeholder="Find Here...." aria-label="Search" />
            <div type="submit">
              <AiOutlineSearch className='fs-3 icon1 Se' />
            </div>
          </form>
          <Link to='/cart' className='cart-trolley-link'>
            <AiOutlineShopping className='fs-3 icon1 cart-trolley' />
            <span className='cart-total--item'>10</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
