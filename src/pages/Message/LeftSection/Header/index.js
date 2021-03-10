import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { RiVideoAddFill } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import IconButton from './components/IconButton'
import { Link } from 'react-router-dom'
import AvatarBlock16 from 'components/AvatarBlock16'
import { useProvideUser } from 'hooks/useUser'

const Header = () => {
    const { userInfo } = useProvideUser()
    return (
        <div className="p-5 flex flex-row items-center space-x-2 border-b border-gray-600 hidden lg:flex" >
            <Link to="/">
                <AvatarBlock16 src={userInfo?.avatar} className="w-10 h-10" />
            </Link>
            <span className="flex-grow font-semibold text-xl">Chats</span>
            <IconButton children={<FiMoreHorizontal />} />
            <IconButton children={<RiVideoAddFill />} />
            <IconButton children={<AiFillEdit />} />
        </div>
    )
}

export default Header
