import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer u-bg-lt-gray u-pt-15 u-pb-10">
        <nav className="grid nav--footer u-mb-15">
            <div className="grid-col-6 grid-col-t-12 grid-col-m-12">
                <h3 className="t-h2 u-mb-0">Get in touch.</h3>
                <p className="t-lead1">I look forward to hearing from you.</p>
            </div>
            <div className="grid-col-2 grid-col-t-4">
                <h4 className="nav__title u-c-blue">About</h4>
                <ul className="nav__list">
                    <li><Link to="/professor/">Teaching</Link></li>
                    <li><Link to="/researcher/">Research</Link></li>
                    <li><Link to="/consultant/">Consulting</Link></li>
                    <li><Link to="/spoon-carver/">Spoon Carving</Link></li>
                </ul>
            </div>
            <div className="grid-col-2 grid-col-t-4">
                <h4 className="nav__title u-c-blue">Writings</h4>
                <ul className="nav__list">
                    <li><Link to="/articles/">Articles</Link></li>
                    <li><Link to="/blog/">Blog</Link></li>
                </ul>
            </div>
            <div className="grid-col-2 grid-col-t-4">
                <h4 className="nav__title u-c-blue">Connect</h4>
                <ul className="nav__list">
                    <li><a href="mailto:cliff@cliffordhurst.com">Email Me</a></li>
                    <li><a href="https://www.linkedin.com/in/cliffhurst">LinkedIn</a></li>
                    <li><a href="/assets/pdfs/Hurst_Clifford_CV_06142013.pdf">CV</a></li>
                </ul>
            </div>
        </nav>
        <div className="grid">
            <div className="grid-col-12 grid-col-sm-12">
                <p className="t-p2">Copyright © { new Date().getFullYear() } Cliff Hurst</p>
            </div>
            
        </div>
    </footer>
      // <footer className="footer u-bg-lt-gray u-pt-15 u-pb-10">
      //   <div className="content has-text-centered">
      //     <img
      //       src={logo}
      //       alt="Kaldi"
      //       style={{ width: '14em', height: '10em' }}
      //     />
      //   </div>
      //   <div className="content has-text-centered has-background-black has-text-white-ter">
      //     <div className="container has-background-black has-text-white-ter">
      //       <div style={{ maxWidth: '100vw' }} className="columns">
      //         <div className="column is-4">
      //           <section className="menu">
      //             <ul className="menu-list">
      //               <li>
      //                 <Link to="/" className="navbar-item">
      //                   Home
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/about">
      //                   About
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/products">
      //                   Products
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/contact/examples">
      //                   Form Examples
      //                 </Link>
      //               </li>
      //               <li>
      //                 <a
      //                   className="navbar-item"
      //                   href="/admin/"
      //                   target="_blank"
      //                   rel="noopener noreferrer"
      //                 >
      //                   Admin
      //                 </a>
      //               </li>
      //             </ul>
      //           </section>
      //         </div>
      //         <div className="column is-4">
      //           <section>
      //             <ul className="menu-list">
      //               <li>
      //                 <Link className="navbar-item" to="/blog">
      //                   Latest Stories
      //                 </Link>
      //               </li>
      //               <li>
      //                 <Link className="navbar-item" to="/contact">
      //                   Contact
      //                 </Link>
      //               </li>
      //             </ul>
      //           </section>
      //         </div>
      //         <div className="column is-4 social">
      //           <a title="facebook" href="https://facebook.com">
      //             <img
      //               src={facebook}
      //               alt="Facebook"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="twitter" href="https://twitter.com">
      //             <img
      //               className="fas fa-lg"
      //               src={twitter}
      //               alt="Twitter"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="instagram" href="https://instagram.com">
      //             <img
      //               src={instagram}
      //               alt="Instagram"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //           <a title="vimeo" href="https://vimeo.com">
      //             <img
      //               src={vimeo}
      //               alt="Vimeo"
      //               style={{ width: '1em', height: '1em' }}
      //             />
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </footer>
    )
  }
}

export default Footer
