import React from 'react'
import logo from 'assets/images/avatar.jpg'
import PropTypes from 'prop-types'

const AvatarBlock16 = ({ src = logo, className = 'w-16 h-16' }) => (
    <img
        src={src}
        alt="avatar"
        className={`rounded-full object-cover ${className}`}
    />
)

AvatarBlock16.defaultProps = {
    className: 'w-16 h-16',
}

AvatarBlock16.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default AvatarBlock16
