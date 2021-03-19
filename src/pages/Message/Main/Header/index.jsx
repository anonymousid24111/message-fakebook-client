import React from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { FaVideo } from 'react-icons/fa'
// absolute
import { Redirect } from 'react-router-dom'
import AvatarBlock16 from 'components/AvatarBlock16'
import { useMain } from '../hooks'

const Header = () => {
    const { setShow, userInfo } = useMain()
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
                <div className="conversation-block-content__body">status</div>
            </div>
            <a
                href={`https://videocall2411.herokuapp.com/videocall/${userId}`}
                target="_blank"
                rel="noreferrer"
            >
                <IoCall
                    className="w-7 h-7 rounded-full p-1 hover:bg-gray-600 bg-gray-700 text-blue-500"
                    onClick={() => handleClickCall()}
                />
            </a>
            <a
                href={`https://videocall2411.herokuapp.com/videocall/${userId}`}
                target="_blank"
                rel="noreferrer"
            >
                <FaVideo className="w-7 h-7 rounded-full p-1 hover:bg-gray-600 bg-gray-700 text-blue-500" />
            </a>
            <IoMdInformationCircle
                className="w-7 h-7 rounded-full p-1 hover:bg-gray-600 bg-gray-700 text-blue-500"
                onClick={() => setShow((x) => !x)}
            />
        </>
    )
}

export default Header
