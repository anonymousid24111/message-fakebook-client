import React, { useState } from 'react'
import { ProvideUser } from 'hooks/useUser'
import logo from 'assets/images/avatar.png'
import { IoIosCamera } from 'react-icons/io'

import useHookProfile from './hooks'
import ListsFriendsProfile from './ListFriends'
import FormUpdateProfile from './FormUpdateProfile'
import NavProfile from './NavProfile'
import DropdownEditCover from './DropdownEditCover'
import ModalEditAvatar from './ModalEditAvatar'

const ProfileImpl = () => {
    const {
        userInfo,
        modal,
        setModal,
        modalRef,
        previewAvatar,
        handleChangeCover,
        handleSubmitAvatar,
        handleChangeAvatar,
        handleUnfriend,
        handleSubmitInfo,
        loadingCover,
        // setLoadingCover,
    } = useHookProfile()
    const [showOptionsEditCover, setShowOptionsEditCover] = useState(false)

    return (
        <div className="w-full min-h-full flex flex-col fb-bg-dark">
            <div className="h-96 relative pb-4 box-content flex flex-row justify-center fb-bg-dark-2">
                <div className="relative" style={{ width: '940px' }}>
                    {loadingCover && (
                        <>
                            <div className="absolute top-0 left-0 bg-black w-full h-full bg-opacity-75" />
                            <div className="loader bg-black w-full" />
                        </>
                    )}
                    <img
                        src={userInfo?.cover_image || logo}
                        className="rounded-lg h-96 object-cover"
                        style={{ width: '940px' }}
                        alt="cover_image"
                    />
                    <div className="absolute bottom-0 right-0 m-4">
                        <button
                            type="button"
                            onClick={() => setShowOptionsEditCover((x) => !x)}
                            className="bg-gray-400 bg-opacity-25 hover:bg-opacity-50 p-2 rounded-lg font-semibold text-lg"
                        >
                            Edit cover photo
                        </button>
                        {showOptionsEditCover && (
                            <DropdownEditCover
                                handleChangeCover={handleChangeCover}
                            />
                        )}
                    </div>
                </div>
                <div
                    className="absolute bottom-0 left-1/2"
                    style={{ marginLeft: '-64px' }}
                >
                    <img
                        src={userInfo?.avatar || logo}
                        className="rounded-full w-32 h-32 border-4 border-black object-cover"
                        alt="avatar_image"
                    />

                    <IoIosCamera
                        className="w-7 h-7 absolute bottom-0 right-0 m-2 bg-gray-900 p-1 rounded-full cursor-pointer"
                        onClick={() => setModal((x) => !x)}
                    />
                    {modal && (
                        <ModalEditAvatar
                            modalRef={modalRef}
                            setModal={setModal}
                            previewAvatar={previewAvatar}
                            handleChangeAvatar={handleChangeAvatar}
                            handleSubmitAvatar={handleSubmitAvatar}
                        />
                    )}
                </div>
            </div>
            <div>
                <div className="text-4xl font-bold text-center">
                    {userInfo?.username || 'Null'}
                </div>
            </div>
            <div className="px-72">
                <NavProfile />
                <FormUpdateProfile
                    userInfo={userInfo}
                    handleSubmitInfo={handleSubmitInfo}
                />
                <ListsFriendsProfile
                    friends={userInfo?.friends}
                    handleUnfriend={handleUnfriend}
                />
            </div>
        </div>
    )
}

const Profile = () => (
    <ProvideUser>
        <ProfileImpl />
    </ProvideUser>
)

export default Profile
