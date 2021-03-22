import React from 'react'
import PropTypes from 'prop-types'

const IconButton = ({ children }) => (
    <span className="rounded-full w-9 h-9 p-2 fb-bg-dark-2 hover:bg-gray-700">
        {children}
    </span>
)

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default IconButton
