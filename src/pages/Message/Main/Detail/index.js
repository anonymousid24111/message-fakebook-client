import React, { useState } from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { RiEdit2Fill } from 'react-icons/ri'
//absolute
import { useMain } from '../hooks'
import AvatarBlock16 from 'components/AvatarBlock16'
import LikeFacebook from 'components/LikeFacebook'

const Detail = () => {
    const { show, userInfo } = useMain()
    const [showOptions, setShowOptions] = useState(false)
    return (
        show && <div className="flex items-center flex-col border-l w-96 p-2 border-gray-600">
            <AvatarBlock16 src={userInfo?.avatar} className="w-20 h-20 my-4" />
            <div className="font-semibold text-lg py-3">{userInfo?.userInfoname || userInfo?.email || 'null'}</div>
            <div className="p-3 w-full rounded-lg hover:bg-gray-600 cursor-pointer" onClick={() => setShowOptions(x => !x)}>Customize chat</div>
            {showOptions && <div className="w-full">
                <div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                    <FaDotCircle className="w-5 h-5 fb-cl-main" />
                    <span className="px-2">Cus 1</span>
                </div>
                <div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                    <div className="w-5 h-5 fb-cl-main" >
                        <LikeFacebook />
                    </div>
                    <span className="px-2">Cus 2</span>
                </div><div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                    <RiEdit2Fill className="w-5 h-5 fb-cl-main" />
                    <span className="px-2">Cus 3</span>
                </div>
            </div>}

            <div className="p-3 w-full rounded-lg hover:bg-gray-600 cursor-pointer">Privacy & support</div>
            <div className="p-3 w-full rounded-lg hover:bg-gray-600 cursor-pointer">Shared Media</div>
        </div>
    )
}

export default Detail
