import { toTimeFacebook } from 'functions/formatTime'
import React from 'react'

const MessageTime = ({time}) => {
    return (
        <div className="text-center text-xs">{toTimeFacebook(time)}</div>
    )
}

export default MessageTime
