import React from 'react'

import logo from '../img/logo.svg'

function Poster() {
    return (
        <div className="hero hero--homepage">
            <svg version="1.1" id="who-is" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 157.5 75.2" xmlSpace="preserve">
                <g>
                    <path className="hero__path w" d="M1,43.6c0.1,6.7,0.8,12.9,2.1,13.1c2.2,0.4,4.3-14.8,7.3-14.7c3.7,0.1,6.3,22,8.6,22c1.2,0,2.9-7.6,2.9-25.6"/>
                    <path className="hero__path ho" d="M32.1,1c-1.5,19.1-0.8,42.9-2.1,63c0,0.1,0.1,0.1,0.1,0c4.2-6.5,6.2-12.8,11.4-18c2.8-2.8,4.1-0.4,4.6,1.7
                        c0.8,3.5,1.5,6.5,5.3,6.7c2.7,0.1,9.1-3.7,9.2-4.5c-0.3-4.7,1.5-6.9,2.4-7.9c2.5-2.6,5.1-2.5,6.3-2.3c-4.1-0.6-6,1.3-7.9,4.9
                        c-1.3,2.5-1,7.4,1,9.2c2.7,2.6,6.9,1.8,8.7-1.5c1.7-3.1,1.8-4.2,2-6.4c0.4-3.6-1.9-5.9-3.8-6.2c0,0,0,0,0,0
                        C66,39.8,64.9,41,63.7,43c-0.4,0.7-0.6,2,0,3.1c2,3.6,6.4,3.7,8.5,3.9c6,0.5,9.6,0.2,14.5-0.5"/>
                    <path className="hero__path i-01" d="M121.5,38.9c-1.1,4.5-1.3,20.9,0.4,28.2"/>
                    <path className="hero__path s" d="M137.6,32.4c-7.5,3.6-7.8,11.9-4.7,18.8c1.9,4.1,9.5,12.9,10.6,16.9c0.8,2.9-0.5,5.6-2.6,5.9
                        c-1.6,0.3-3.5,0-4.6-1.2c-1.9-2.1-1.4-5.5-0.1-7.6c1.1-1.9,2.4-3.2,4-4.6c5-4.7,9.8-8.1,16.3-10.5"/>
                    <path className="hero__path i-02" d="M123.1,26.2c-0.2,2.1-0.7,3.9-0.9,5.9"/>
                </g>
            </svg>
            
            <h1 className="t-poster1">Cliff Hurst 
                <svg version="1.1" id="question-mark" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 27.5 55.7" xmlSpace="preserve">
                    <g>
                        <path className="hero__path qm-01" d="M1,3.6C7.8-0.3,23.8,0,25.9,5.7c0.4,1.1,2.1,4.4-2.7,11.3C13.2,31.1,2.7,39.6,4.2,42.6c0.3,0.5,1,1.6,3.4,0.9"/>
                        <path className="hero__path qm-02" d="M5.2,49.1c0,2,0,3.5,0,5.6"/>
                    </g>
                </svg>
                <svg version="1.1" id="lines" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 360.4 12.1" xmlSpace="preserve">
                    <g>
                        <path className="hero__path line-01" d="M20.3,10.9c108-2.3,215.8,1.7,324-0.6"/>
                        <path className="hero__path line-02" d="M1,1c56,0.4,188.1,2.9,209,2.3c42.3-1.2,108,1.5,149.4,1.5"/>
                    </g>
                </svg>
            </h1> 
            <svg className="icon-arrow-down fadein-bounce"><use xlinkHref="../assets/images/icons.svg#icon-arrow-down"></use></svg>
        </div>
    )
}

export default Poster
