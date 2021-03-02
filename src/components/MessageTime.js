import { toTimeFacebook } from 'functions/formatTime'
import React from 'react'

const MessageTime = ({time}) => {
    return (
        <div className="list-chat__time">{toTimeFacebook(time)}</div>
    )
}

export default MessageTime
