import React from 'react'
import { NavLink } from 'react-router-dom'
import { getTimeToNow } from 'functions/formatTime'
import AvatarBlock16 from 'components/AvatarBlock16'
import LikeFacebook from 'components/LikeFacebook'
import SentStatus from 'pages/Message/Main/Body/SentStatus'
import ReceivedStatus from 'pages/Message/Main/Body/ReceivedStatus'
import PropTypes from 'prop-types'

const ConversationElement = ({
    isOnline,
    members = {},
    conversation = {},
    conversationName = '',
    firstMessage = {},
    conversationId = '',
}) => {
    let isRead
    let isMe = ''
    if (firstMessage?.sender === localStorage.getItem('user_id')) {
        isRead = true
        isMe = 'You: '
    } else if (firstMessage?.is_read !== 0) {
        isRead = true
    } else {
        isRead = false
    }
    const renderFirstMessage = () => {
        if (firstMessage === {}) {
            return <i>You have no message</i>
        }
        if (firstMessage.kind === 'react') {
            return (
                <div className="w-4 h-4">
                    <LikeFacebook />
                </div>
            )
        }
        if (firstMessage.kind === 'text') {
            return (
                <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {firstMessage.content || <i>You have no message</i>}
                </div>
            )
        }
        if (firstMessage.kind === 'images') {
            const json = JSON.parse(firstMessage.content)

            return (
                <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                    <i>
                        sent some
                        {json?.length > 1
                            ? `${json?.length} photos.`
                            : 'a photo.'}
                    </i>
                </div>
            )
        }

        return <i>Doing</i>
    }

    const renderStatusFirstMessage = () => {
        if (
            firstMessage.sender !== localStorage.getItem('user_id') &&
            firstMessage.is_read !== 2
        ) {
            return (
                <span className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0" />
            )
        }
        if (
            firstMessage.sender === localStorage.getItem('user_id') &&
            firstMessage.is_read === 0
        ) {
            return <SentStatus />
        }
        if (
            firstMessage.sender === localStorage.getItem('user_id') &&
            firstMessage.is_read === 1
        ) {
            return <ReceivedStatus />
        }
        if (
            firstMessage.sender === localStorage.getItem('user_id') &&
            firstMessage.is_read === 2
        ) {
            return <AvatarBlock16 src={members?.avatar} className="w-4 h-4" />
        }
        return null
    }

    return (
        <NavLink
            activeClassName="bg-active"
            className="hover:bg-gray-600"
            to={`/message/t/${conversationId}`}
        >
            <div
                className="flex items-center no-underline p-3 items-center rounded-xl"
                style={{
                    backgroundColor: 'inherit',
                    fontWeight: isRead ? '' : 'bolder',
                }}
            >
                <div className="flex-none w-16 h-16 relative">
                    <AvatarBlock16 src={members?.avatar} />
                    {isOnline && (
                        <span className="absolute bottom-0 right-0 bg-green-500 rounded-full w-4 h-4 border-4 border-current" />
                    )}
                </div>
                <div className="flex-grow flex-col px-2 overflow-hidden hidden lg:flex">
                    <span className="overflow-hidden whitespace-nowrap overflow-ellipsis font-semibold">
                        {conversationName || 'null'}
                    </span>
                    <div className="flex text-sm">
                        {isMe && (
                            <span className="flex-shrink-0">
                                {isMe}
                                &nbsp;
                            </span>
                        )}
                        {renderFirstMessage()}
                        <span>&nbsp;·&nbsp;</span>
                        <span className="flex-shrink-0">
                            {getTimeToNow(firstMessage?.created)}{' '}
                        </span>
                    </div>
                </div>
                {renderStatusFirstMessage()}
            </div>
        </NavLink>
    )
}
ConversationElement.defaultProps = {
    isOnline: false,
}

ConversationElement.propTypes = {
    isOnline: PropTypes.bool,
    members: PropTypes.objectOf(PropTypes.any).isRequired,
    conversation: PropTypes.objectOf(PropTypes.any).isRequired,
    conversationName: PropTypes.string.isRequired,
    firstMessage: PropTypes.objectOf(PropTypes.any).isRequired,
    conversationId: PropTypes.string.isRequired,
}

export default ConversationElement
