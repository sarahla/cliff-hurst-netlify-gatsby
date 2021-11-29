import React from 'react'
import { Link } from 'gatsby'
import Icon from '../components/Icon'

const NotFoundPage = () => (
  <div className="u-center u-pt-30 u-pb-30">
    <h1 className="t-h1"><span className="t-poster1">404</span><br/><span className="t-cursive">Page NOT FOUND</span></h1>
    <p className="t-lead1">Oops! This page doesn't exist.</p>
    <Link className="link" to="/"><Icon name="icon-arrow-left" className="icon-arrow-left icon--small u-mr-2" /> Go Home</Link>
  </div>
)

export default NotFoundPage
