import React from 'react'
import PropTypes from 'prop-types'

const IconButton = ({ children }) => (
    <span className="rounded-full w-8 h-8 p-2 bg-gray-600 hover:bg-gray-700">
        {children}
    </span>
)

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default IconButton
