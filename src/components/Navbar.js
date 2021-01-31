import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../img/cliff-hurst-logo.svg'
import icons from '../img/icons.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }

    // clean up active class on body
    document.body.classList.remove('nav-active');
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
        // toggle body class to create slide effect
        document.body.classList.toggle('nav-active');
      }
    )
  }
  
  render() {
    return (
      <header className={`nav ${this.state.navBarActiveClass}`}>
          <Link to="/" className="nav__logo" title="Logo">
            <img src={logo} width="154" height="24" alt="Cliff Hurst" />
          </Link>
          
          <button className="nav__btn--open" data-nav-open="" onClick={() => this.toggleHamburger()}>
            <svg className="icon-menu"><use xlinkHref={`${icons}#icon-menu`}></use></svg>
          </button>

          <nav className="nav__slideout">
              <button className="nav__btn--close" onClick={() => this.toggleHamburger()}>
                  <svg className="icon-menu" viewBox="0 0 512 512">
                      <path id="icon-menu-2" d="m491.3 235.3h-470.6c-11.4 0-20.7 9.3-20.7 20.7s9.3 20.7 20.7 20.7h470.6c11.4 0 20.7-9.3 20.7-20.7s-9.3-20.7-20.7-20.7z"></path>
                      <path id="icon-menu-1" d="M491.3,78.4H20.7C9.3,78.4,0,87.7,0,99.1s9.3,20.7,20.7,20.7h470.6c11.4,0,20.7-9.3,20.7-20.7S502.7,78.4,491.3,78.4z"></path>
                      <path id="icon-menu-3" d="m491.3 392.2h-470.6c-11.4 0-20.7 9.3-20.7 20.7s9.3 20.7 20.7 20.7h470.6c11.4 0 20.7-9.3 20.7-20.7s-9.3-20.7-20.7-20.7z"></path>
                  </svg>
              </button>
              <h4 className="nav__title">About</h4>
              <ul className="nav__list">
                  <li><Link to="/professor/">Teaching</Link></li>
                  <li><Link to="/researcher/">Research</Link></li>
                  <li><Link to="/consultant/">Consulting</Link></li>
                  <li><Link to="/spoon-carver/">Spoon Carving</Link></li>
              </ul>

              <h4 className="nav__title">Connect</h4>
              <ul className="nav__list">
                  <li><a href="mailto:clif@cliffordhurst.com">Email Me</a></li>
                  <li><a href="https://www.linkedin.com/in/cliffhurst" target="_blank" rel="noreferrer">LinkedIn</a></li>
                  <li><a href="/assets/pdfs/Hurst_Clifford_CV_06142013.pdf">CV</a></li>
              </ul>

              <p className="nav__footer t-caption">© Cliff Hurst</p>
          </nav>
      </header>

      // <nav
      //   className="navbar is-transparent"
      //   role="navigation"
      //   aria-label="main-navigation"
      // >
      //   <div className="container">
      //     <div className="navbar-brand">
      //       <Link to="/" className="navbar-item" title="Logo">
      //         <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
      //       </Link>
      //       {/* Hamburger menu */}
      //       <div
      //         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
      //         data-target="navMenu"
      //         onClick={() => this.toggleHamburger()}
      //       >
      //         <span />
      //         <span />
      //         <span />
      //       </div>
      //     </div>
      //     <div
      //       id="navMenu"
      //       className={`navbar-menu ${this.state.navBarActiveClass}`}
      //     >
      //       <div className="navbar-start has-text-centered">
      //         <Link className="navbar-item" to="/about">
      //           About
      //         </Link>
      //         <Link className="navbar-item" to="/products">
      //           Products
      //         </Link>
      //         <Link className="navbar-item" to="/blog">
      //           Blog
      //         </Link>
      //         <Link className="navbar-item" to="/contact">
      //           Contact
      //         </Link>
      //         <Link className="navbar-item" to="/contact/examples">
      //           Form Examples
      //         </Link>
      //       </div>
      //       <div className="navbar-end has-text-centered">
      //         <a
      //           className="navbar-item"
      //           href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           <span className="icon">
      //             <img src={github} alt="Github" />
      //           </span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    )
  }
}

Navbar.propTypes = {
  hideLogo: PropTypes.bool,
  onToggle: PropTypes.func,
}

export default Navbar
