import React from 'react'
import logo from 'assets/images/avatar.jpg'
const AvatarBlock16 = ({ src = logo, className = "w-16 h-16" }) => {
    return (
        <img src={src} alt="avatar"
            className={`rounded-full object-cover ${className}`} />
    )
}

export default AvatarBlock16
