import React from 'react'
import { Redirect } from 'react-router-dom'
import AvatarBlock16 from 'components/AvatarBlock16'
import CallIconFacebook from 'components/UI/CallIconFacebook'
import VideoIconFacebook from 'components/UI/VideoIconFacebook'
import DetailIconFacebook from 'components/UI/DetailIconFacebook'
import { useAuth } from 'hooks/useAuth'
import { useMain } from '../contexts'

const Header = () => {
    const { setShow, userInfo, show, conversation } = useMain()
    const { _id: userId } = userInfo
    const { _id: conversationId } = conversation || {}
    const { userOnlines } = useAuth()
    function renderRedirect() {
        if (userInfo) {
            return null
        }
        return <Redirect to="/message/t" />
    }

    const handleClickCall = () => {}

    return (
        <>
            {renderRedirect()}
            <div className="relative ">
                <AvatarBlock16 src={userInfo?.avatar} className="w-10 h-10" />
                {userOnlines?.includes(userId) && (
                    <span className="absolute bottom-0 right-0 bg-green-500 rounded-full w-3 h-3 border-2 border-current" />
                )}
            </div>

            <div className="flex-grow">
                <div className="text-lg font-semibold">
                    {userInfo?.username || userInfo?.email || 'null'}
                </div>
                {userOnlines?.includes(userId) && (
                    <div className="text-xs">Active now</div>
                )}
            </div>
            <a
                href={`https://videocall2411.herokuapp.com/videocall/${conversationId}`}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
            >
                <CallIconFacebook onClick={() => handleClickCall()} />
            </a>
            <a
                href={`https://videocall2411.herokuapp.com/videocall/${conversationId}`}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
            >
                <VideoIconFacebook />
            </a>
            <button
                type="button"
                className="focus:outline-none relative"
                onClick={() => setShow((x) => !x)}
            >
                <DetailIconFacebook />
                {show && (
                    <div className="absolute top-0 left-0 w-full h-full border border border-4 rounded-full border-blue-500" />
                )}
            </button>
        </>
    )
}

export default Header
