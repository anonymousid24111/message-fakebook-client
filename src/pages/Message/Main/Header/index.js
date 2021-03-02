import React from 'react'
import { IoMdInformationCircle } from 'react-icons/io'
import { IoCall } from 'react-icons/io5'
import { FaVideo } from 'react-icons/fa'
// absolute
import { useMain } from '../hooks'
import { Redirect } from 'react-router-dom'
import AvatarBlock16 from 'components/AvatarBlock16'

const Header = () => {
    const { setShow, userInfo } = useMain()

    console.log("render header:", userInfo)
    return (
        <>
            {userInfo ?
                userInfo._id ? "" : <Redirect to='/message/t' />
                : ""
            }
            <AvatarBlock16 src={userInfo?.avatar} className="w-10 h-10" />
            <div className="flex-grow">
                <div className="text-lg font-semibold">{userInfo?.name || userInfo?.email || "null"}</div>
                <div className="conversation-block-content__body">status</div>
            </div>
            <IoCall className="w-7 h-7 rounded-full p-1 hover:bg-gray-600 bg-gray-700 text-blue-500" />
            <FaVideo className="w-7 h-7 rounded-full p-1 hover:bg-gray-600 bg-gray-700 text-blue-500" />
            <IoMdInformationCircle className="w-7 h-7 rounded-full p-1 hover:bg-gray-600 bg-gray-700 text-blue-500" onClick={() => setShow(x => !x)} />
        </>
    )
}

export default Header
