import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '0px' }
  const { alt = '', childImageSharp, image, aspectRatio } = imageInfo

  if (!!image && !!image.childImageSharp) {
    const fluid = aspectRatio ? { ...image.childImageSharp.fluid, aspectRatio } : image.childImageSharp.fluid;
    return (
      <Img style={imageStyle} fluid={fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    const fluid = aspectRatio ? { ...childImageSharp.fluid, aspectRatio } : childImageSharp.fluid;
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
