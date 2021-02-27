import React from 'react'

const IconButton = ({children}) => {
    // console.log(children)
    return (
        <span className="rounded-full w-8 h-8 p-2 bg-gray-600 hover:bg-gray-700">
            {children}
        </span>
    )
}

export default IconButton
