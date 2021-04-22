import React from 'react'
import { camelize } from '../utils'

function Hero(props) {
    const { title, image, style = 'secondary' } = props;
    return (
        <section id={camelize(title)} className={ `hero--${style}` } data-animate>
            { image ? (
            <div className="hero__image" style={{
                    backgroundImage: `url(${
                        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                    backgroundPosition: 'top 35% center',
                }}>
            </div>
            ) : ''}
            {
                style === 'secondary' ? (
                    <div className="hero__layout">
                        <div className="hero__content">
                            <h1 className="t-h1 u-mr-2 u-mb-0">
                                I am <br/>a&nbsp;<span className="t-cursive">{title}</span>
                            </h1>
                        </div>
                    </div>   
                ) : (
                    <h1 className="t-h1 u-mb-0">
                        {title}
                    </h1>
                )
            } 
        </section>
    )
}

export default Hero
