import React from 'react'
import { Redirect } from 'react-router-dom'
import AvatarBlock16 from 'components/AvatarBlock16'
import CallIconFacebook from 'components/UI/CallIconFacebook'
import VideoIconFacebook from 'components/UI/VideoIconFacebook'
import DetailIconFacebook from 'components/UI/DetailIconFacebook'
import { useMain } from '../hooks'

const Header = () => {
    const { setShow, userInfo, show } = useMain()
    const { _id: userId } = userInfo
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
            <AvatarBlock16 src={userInfo?.avatar} className="w-10 h-10" />
            <div className="flex-grow">
                <div className="text-lg font-semibold">
                    {userInfo?.username || userInfo?.email || 'null'}
                </div>
                <div className="text-xs">Active 40m ago</div>
            </div>
            <a
                href={`https://videocall2411.herokuapp.com/videocall/${userId}`}
                target="_blank"
                rel="noreferrer"
            >
                <CallIconFacebook onClick={() => handleClickCall()} />
            </a>
            <a
                href={`https://videocall2411.herokuapp.com/videocall/${userId}`}
                target="_blank"
                rel="noreferrer"
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
