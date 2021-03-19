import React, { useState } from 'react'
import { FaDotCircle } from 'react-icons/fa'
import { RiEdit2Fill } from 'react-icons/ri'
// absolute
import AvatarBlock16 from 'components/AvatarBlock16'
import LikeFacebook from 'components/LikeFacebook'
import callApiHttp from 'functions/callApiHttp'
import { useMain } from '../hooks'

const Detail = () => {
    const { show, userInfo } = useMain()
    const [showOptions, setShowOptions] = useState(false)
    const [showMedias, setShowMedias] = useState(false)
    const [medias, setMedias] = useState([])

    const handleShowMedias = async () => {
        if (showMedias) {
            setShowMedias(false)
            return 0
        }
        setShowMedias((x) => !x)

        try {
            const { data } = await callApiHttp({
                method: 'GET',
                url: `/conversation/get_all_medias?conversationId=${sessionStorage.getItem(
                    'conversationId'
                )}`,
            })
            // console.log(`data`, data)
            if (data?.code === 1000) {
                setMedias(data.data)
            } else {
                return 0
            }
            return 0
        } catch (error) {
            return 0
        }
    }

    return (
        show && (
            <div className="flex items-center flex-col border-l w-96 p-2 border-gray-600">
                <AvatarBlock16
                    src={userInfo?.avatar}
                    className="w-20 h-20 my-4"
                />
                <div className="font-semibold text-lg py-3">
                    {userInfo?.userInfoname || userInfo?.email || 'null'}
                </div>
                <button
                    type="button"
                    className="p-3 w-full rounded-lg hover:bg-gray-600 cursor-pointer focus:outline-none text-left"
                    onClick={() => setShowOptions((x) => !x)}
                >
                    Customize chat
                </button>
                {showOptions && (
                    <div className="w-full">
                        <div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                            <FaDotCircle className="w-5 h-5 fb-cl-main" />
                            <span className="px-2">Cus 1</span>
                        </div>
                        <div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                            <div className="w-5 h-5 fb-cl-main">
                                <LikeFacebook />
                            </div>
                            <span className="px-2">Cus 2</span>
                        </div>
                        <div className="w-full p-3 rounded-lg hover:bg-gray-600 flex flex-row cursor-pointer">
                            <RiEdit2Fill className="w-5 h-5 fb-cl-main" />
                            <span className="px-2">Cus 3</span>
                        </div>
                    </div>
                )}

                <div className="p-3 w-full rounded-lg hover:bg-gray-600 cursor-pointer">
                    Privacy & support
                </div>
                <button
                    type="button"
                    className="p-3 text-left w-full rounded-lg hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleShowMedias()}
                >
                    Shared Media
                </button>
                {showMedias && (
                    <div className="w-full">
                        {medias?.length > 0 &&
                            medias.map((media) => {
                                const images = JSON.parse(media.content)
                                return images.map((image) => (
                                    <img
                                        className="w-28 h-28 object-cover inline m-1"
                                        src={image}
                                        alt="media_image"
                                        key={image}
                                    />
                                ))
                            })}
                    </div>
                )}
            </div>
        )
    )
}

export default Detail
