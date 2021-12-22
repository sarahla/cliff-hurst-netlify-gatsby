import React from 'react'
import { Link } from 'gatsby'
import SignupForm from '../components/Forms/SignupForm';
import { withPrefix } from 'gatsby'

const Footer = ({ location }) => {
    return (
        <footer className="footer u-bg-lt-gray u-pt-15 u-pb-10">
            <nav className="grid nav--footer u-mb-15">
                <div className="grid-col-6 grid-col-t-12 grid-col-m-12">
                    <h3 className="t-h2 u-mb-0">Keep in touch.</h3>
                    <p className="t-lead1 u-mb-4">Subscribe to my email list to stay updated</p>
                    <SignupForm {...{ location }} />
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
                        <li><Link to="/media/">Media</Link></li>
                    </ul>
                </div>
                <div className="grid-col-2 grid-col-t-4">
                    <h4 className="nav__title u-c-blue">Connect</h4>
                    <ul className="nav__list">
                        <li><a href="mailto:cliff@cliffordhurst.com">Email Me</a></li>
                        <li><a href="https://www.linkedin.com/in/cliffhurst">LinkedIn</a></li>
                        <li><a href={`${withPrefix('/')}img/Hurst_Clifford_CV_06142013.pdf`}>CV</a></li>
                    </ul>
                </div>
            </nav>
            <div className="grid">
                <div className="grid-col-12 grid-col-sm-12">
                    <p className="t-p2">Copyright © {new Date().getFullYear()} Cliff Hurst</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
