import React from 'react'

import { useMain } from '../hooks';

import MessageBlock from 'components/MessageBlock';
import { useAuth } from 'hooks/useAuth';

const Body = () => {
    // const divRef = useRef(null);
    const { user } = useAuth()
    const { conversation } = useMain()
    console.log("render body")
    return (

        <div className="list-chat__left">
            {conversation?.messages?.length > 0 ? conversation.messages.map((message, index) => {
                return <MessageBlock message={message} key={index} isMe={user === message?.sender} />
            }) : <i>You have no message</i>}
        </div>

    )
}

export default Body
