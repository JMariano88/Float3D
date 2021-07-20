import React, { useState, useRef } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import ReactDOM from 'react-dom'
import {
    animated,
    useTransition,
    useSpring,
    useChain,
    config
  } from 'react-spring'
import 'normalize-css'
import './styles.css'





const Hud = () => {
  
  const [showMenu, setShowMenu] = useState(false);

  const toggleClass = () => {
    setShowMenu(!showMenu );
  }



  return (
    <>
     <header>
        <div
          className={showMenu ? "menu-btn close" : "menu-btn"}
          onClick={() =>toggleClass()}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
      </div>
      <nav className={showMenu ? "menu show" : "menu"}>
          <ul className="menu-nav">
            <li className="nav-item current">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about.html" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/work.html" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact.html" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
    </header>
      
   

    </>
  )
}



export default Hud
