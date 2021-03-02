import React from 'react'
import logo from 'assets/images/avatar.jpg'
const AvatarBlock = ({ src = logo }) => {
    return (
        <img src={src} alt="avatar"
            className="rounded-full w-16 h-16 object-cover" />
    )
}

export default AvatarBlock
