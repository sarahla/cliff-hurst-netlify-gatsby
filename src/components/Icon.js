import React from 'react'
import PropTypes from 'prop-types'

const iconPath = '../img/icons.svg'

const Icon = ({ name, color = 'currentColor', size, className = name }) => {
    return (
      <svg className={className} width={size} viewBox="0 0 512 512" fill={color}>
        <use href={iconPath + `#${name}`} xlinkHref={iconPath + `#${name}`} />
      </svg>
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string,
}

export default Icon
