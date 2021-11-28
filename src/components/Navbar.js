import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../img/cliff-hurst-logo.svg'
import Icon from './Icon'

const Navbar = ({ onToggle, active, hideLogo }) => {  
  useEffect(() => {
    return () => {
      // clean up active class on body
      document.body.classList.remove('nav-active')
    };
  }, []);

  return (
    <header className={`nav ${active ? 'is-active' : ''}`}>
      { !hideLogo ? (
        <Link to="/" className="nav__logo" title="Logo">
          <img src={logo} width="154" height="24" alt="Cliff Hurst" />
        </Link>) : ''
      }

      <button className="nav__btn--open" data-nav-open="" onClick={onToggle}>
        <Icon name="icon-menu" />
      </button>

      <nav className="nav__slideout">
        <button className="nav__btn--close" onClick={onToggle}>
          <svg className="icon-menu" viewBox="0 0 512 512">
            <path id="icon-menu-2" d="m491.3 235.3h-470.6c-11.4 0-20.7 9.3-20.7 20.7s9.3 20.7 20.7 20.7h470.6c11.4 0 20.7-9.3 20.7-20.7s-9.3-20.7-20.7-20.7z"></path>
            <path id="icon-menu-1" d="M491.3,78.4H20.7C9.3,78.4,0,87.7,0,99.1s9.3,20.7,20.7,20.7h470.6c11.4,0,20.7-9.3,20.7-20.7S502.7,78.4,491.3,78.4z"></path>
            <path id="icon-menu-3" d="m491.3 392.2h-470.6c-11.4 0-20.7 9.3-20.7 20.7s9.3 20.7 20.7 20.7h470.6c11.4 0 20.7-9.3 20.7-20.7s-9.3-20.7-20.7-20.7z"></path>
          </svg>
        </button>
        <h4 className="nav__title">About</h4>
        <ul className="nav__list">
          <li><Link onClick={onToggle} to="/professor/">Teaching</Link></li>
          <li><Link onClick={onToggle} to="/researcher/">Research</Link></li>
          <li><Link onClick={onToggle} to="/consultant/">Consulting</Link></li>
          <li><Link onClick={onToggle} to="/spoon-carver/">Spoon Carving</Link></li>
        </ul>

        <h4 className="nav__title">Writings</h4>
        <ul className="nav__list">
          <li><Link onClick={onToggle} to="/articles/">Articles</Link></li>
          <li><Link onClick={onToggle} to="/blog/">Blog</Link></li>
        </ul>

        <h4 className="nav__title">Connect</h4>
        <ul className="nav__list">
          <li><a href="mailto:cliff@cliffordhurst.com">Email Me</a></li>
          <li><a href="https://www.linkedin.com/in/cliffhurst" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="/assets/pdfs/Hurst_Clifford_CV_06142013.pdf">CV</a></li>
        </ul>

        <p className="nav__footer t-caption">© Cliff Hurst</p>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  hideLogo: PropTypes.bool,
  onToggle: PropTypes.func,
}

export default Navbar