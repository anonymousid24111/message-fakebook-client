import { toTimeFacebook } from 'functions/formatTime'
import React from 'react'
import PropTypes from 'prop-types'

const MessageTime = ({ time }) => (
    <div className="text-center text-xs">{toTimeFacebook(time)}</div>
)
MessageTime.propTypes = {
    time: PropTypes.string.isRequired,
}

export default MessageTime
