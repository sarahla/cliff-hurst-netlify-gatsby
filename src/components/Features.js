import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'

const FeatureGrid = ({ gridItems }) => (
  gridItems ? (
  <div>
    {gridItems.map((item, index) => (
      <section key={item.url} className={`block ${index % 2 ? 'block--right' : 'block--left'} u-pt-10 u-pb-10 u-mb-20 m-u-mb-5`}>
          <div className="block__layout">
              <figure className="block__image">
                  <PreviewCompatibleImage imageInfo={item} />
                  {item.caption ? (
                      <figcaption className="t-caption">
                        {item.caption}
                      </figcaption>
                    ) : ''}
              </figure>
              <div className="block__content">
                  <h2 className="t-h1 u-mb-8">
                    I am <br />a <span className="t-cursive">{item.headline}</span>
                  </h2>
                  <p className="t-lead1 u-mb-8">{item.text}</p>
                  <Link className="link link--cta" to={item.url}>{item.cta|| 'Find out more'}</Link>
              </div>
          </div>    
      </section>
    ))}
  </div>
  ) : 'No features to display.' 
  // <div className="columns is-multiline">
  //   {gridItems.map((item) => (
  //     <div key={item.text} className="column is-6">
  //       <section className="section">
  //         <div className="has-text-centered">
  //           <div
  //             style={{
  //               width: '240px',
  //               display: 'inline-block',
  //             }}
  //           >
  //             <PreviewCompatibleImage imageInfo={item} />
  //           </div>
  //         </div>
  //         <p>{item.text}</p>
  //       </section>
  //     </div>
  //   ))}
  // </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
