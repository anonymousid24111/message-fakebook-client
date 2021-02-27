import React, { useState } from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { RiEdit2Fill } from 'react-icons/ri'
import { AiFillLike } from 'react-icons/ai'
//absolute
import logo from 'assets/images/avatar.jpg'
import { useMain } from '../hooks'

const Detail = ({ user={} }) => {
    const {show} = useMain()
    const [showOptions, setShowOptions] = useState(false)
    return (
        show&&<div className="flex items-center flex-col border-l w-5/12 p-2 border-gray-600" style={{ display: show ? "flex" : "none" }} >
            <img className="rounded-full w-20 h-20 my-4" src={user?.avatar||logo} alt="avatar" />
            <div className="font-semibold text-lg py-3">{user?.username||user?.email||'null'}</div>
            <div className="p-3 w-full rounded-lg hover:bg-gray-600 cursor-pointer" onClick={() => setShowOptions(x => !x)}>Customize chat</div>
            <div className="w-full" style={{ display: showOptions ? "block" : "none" }}>
                <div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                    <FaDotCircle className="detail-items__icon" />
                    <span className="detail-items__text">Cus 1</span>
                </div>
                <div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                    <AiFillLike className="detail-items__icon" />
                    <span className="detail-items__text">Cus 2</span>
                </div><div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                    <RiEdit2Fill className="detail-items__icon" />
                    <span className="detail-items__text">Cus 3</span>
                </div>
            </div>

            <div className="p-3 w-full rounded-lg hover:bg-gray-600 cursor-pointer">Privacy & support</div>
        </div>
    )
}

export default Detail
