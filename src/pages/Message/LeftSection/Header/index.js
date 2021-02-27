import React from 'react'
import logo from 'assets/images/avatar.jpg'
import { FiMoreHorizontal } from 'react-icons/fi'
import { RiVideoAddFill } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import IconButton from './components/IconButton'

const Header = () => {
    const user = localStorage.getItem("user_id")
    const avatar = localStorage.getItem("avatar_id")
    console.log("render header leftsection: ", user?"loading":"")
    return (
        <div className="p-5 flex flex-row items-center space-x-2 border-b border-gray-600" >
            <img src={avatar || logo} className="rounded-full w-10" alt="logo" />
            <span className="flex-grow font-semibold text-xl">Chats</span>
            <IconButton children={<FiMoreHorizontal />} />
            <IconButton children={<RiVideoAddFill />} />
            <IconButton children={<AiFillEdit />} />
        </div>
    )
}

export default Header
