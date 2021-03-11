import React from 'react'
import logo from 'assets/images/avatar.jpg'
import PropTypes from 'prop-types'

function AvatarBlock({ src = logo }) {
    return (
        <img
            src={src}
            alt="avatar"
            className="rounded-full w-16 h-16 object-cover"
        />
    )
}

AvatarBlock.propTypes = {
    src: PropTypes.string.isRequired,
}

export default AvatarBlock
