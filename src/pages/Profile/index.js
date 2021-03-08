import React, { useEffect, useRef, useState } from 'react'
import { useUser, ProvideUser } from 'hooks/useUser'
import callApiHttp from 'functions/callApiHttp'
import logo from 'assets/images/avatar.jpg'
import { IoIosCamera } from 'react-icons/io'
const ProfileImpl = () => {
    const user = useUser()
    const { userInfo = null } = user
    const modalRef = useRef(null)
    const [error, setError] = useState()
    const [modal, setModal] = useState()
    const [showOptionsEditCover, setShowOptionsEditCover] = useState(false)

    const [avatar, setAvatar] = useState()
    const [previewAvatar, setPreviewAvatar] = useState()
    const handleChangeAvatar = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(file)
            setPreviewAvatar(reader.result)
        }
        reader.readAsDataURL(file)
        console.log('file', file)
    }


    const handleChangeCover = async (e) => {
        e.preventDefault()
        let file = e.target.files[0];
        let formData = new FormData()
        formData.append("cover_image", file)
        const { data } = await callApiHttp({
            method: "POST",
            url: "/user/upload_cover_image",
            data: formData
        })
        if (data.code === 1000) {
            alert("upload thanh cong")
            // setModal(false)
            // setAvatar(null)
        }
        else {
            alert("upload fail")
        }


    }


    const handleSubmitAvatar = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append("avatar", avatar)

        const { data } = await callApiHttp({
            method: "POST",
            url: "/user/upload_avatar",
            data: formData
        })
        if (data.code === 1000) {
            alert("upload thanh cong")
            setModal(false)
            setAvatar(null)
        }
        else {
            alert("upload fail")
        }

    }



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target))
                setModal(false)
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [modalRef])

    const handleUnfriend = async (user_id) => {
        try {
            const { data } = await callApiHttp({
                method: 'POST',
                url: "/friend/set_unfriend",
                data: {
                    user_id
                }
            })
            if (data.code === 1000) {
                alert("success")
            } else {
                alert("failed")
            }
        } catch (error) {
            console.log(error)
            setError(error?.message)
        }
    }

    return (
        <div className="w-full h-full flex flex-col bg-gray-900 ">
            <div className="h-96 relative pb-4 box-content flex flex-row justify-center">
                <div className="relative" style={{ width: "940px" }} >
                    <img src={userInfo?.cover_image||logo} className="rounded-lg h-96 object-cover" style={{ width: "940px" }} alt="cover_image" />
                    <div className="absolute bottom-0 right-0 m-4">
                        <button
                            type="button"
                            onClick={() => setShowOptionsEditCover(x => !x)}
                            className="bg-gray-400 bg-opacity-25 hover:bg-opacity-50 p-2 rounded-lg font-semibold text-lg">
                            Edit cover photo
                         </button>
                        {showOptionsEditCover && (
                            <div className="absolute right-0 bg-gray-700 p-2 rounded-lg">
                                <input id="cover" type="file" className="hidden" onChange={e => handleChangeCover(e)} />
                                <label htmlFor="cover" className="p-2 hover:bg-gray-800 w-60 rounded-lg">
                                    Upload Photo
                                </label>
                                <div className="p-2 hover:bg-gray-800 w-60 rounded-lg">
                                    Select Photo
                                </div>
                                <hr />
                                <div className="p-2 hover:bg-gray-800 w-60 rounded-lg">
                                    Remove
                                </div>
                            </div>
                        )}
                    </div>


                </div>
                <div className="absolute bottom-0 left-1/2" style={{ marginLeft: "-64px" }}>
                    <img src={userInfo?.avatar || logo} className="rounded-full w-32 h-32 border-4 border-black object-cover" alt="avatar_image" />

                    <IoIosCamera className="w-7 h-7 absolute bottom-0 right-0 m-2 bg-gray-900 p-1 rounded-full" onClick={() => setModal(true)} />
                    {modal &&
                        <div className=" fixed z-10 pt-20 top-0 left-0 w-full h-full overflow-auto bg-black bg-opacity-25">
                            <div ref={modalRef} className="relative m-auto p-0 border border-black w-6/12 bg-white text-black">
                                <div className="text-center text-lg">Update Profile Picture</div>
                                <form onSubmit={handleSubmitAvatar}>
                                    <input id="avatar" type="file" className="hidden" onChange={e => handleChangeAvatar(e)} />
                                    {previewAvatar ? (
                                        <div className="">
                                            <img src={previewAvatar} alt="avatarupload" className="object-cover" />
                                            <div>
                                                <button >Cancel</button>
                                                <button type="submit">Save</button>
                                            </div>
                                        </div>
                                    ) : (

                                            <div className="">
                                                <div className="flex flex-row">

                                                    <button type="button" className="rounded-lg text-blue flex-grow bg-blue-400">
                                                        <label htmlFor="avatar">Upload Photo
                                                          </label>
                                                    </button>

                                                    <button className="rounded-lg text-blue flex-grow bg-gray-400">Add Frame</button>
                                                    <button className="rounded-lg text-blue">Edit</button>
                                                </div>
                                                <div className="">
                                                    <div>Profile Pictures</div>
                                                    <div>list 6 photos</div>
                                                </div>
                                                <div className="">
                                                    <div>Cover Photos</div>
                                                    <div>list 6 photos</div>
                                                </div>
                                            </div>
                                        )}
                                </form>

                            </div>

                        </div>}
                </div>
            </div>
            <div>
                <div className="text-4xl font-bold text-center">
                    {userInfo?.username || "Null"}
                </div>
            </div>
            <ul className="flex flex-row space-x-4 p-4" >
                <li className="p-3 bg-blue-900 w-20 text-center">Post</li>
                <li className="p-3 bg-blue-900 w-20 text-center">About</li>
                <li className="p-3 bg-blue-900 w-20 text-center">Friends</li>
                <li className="p-3 bg-blue-900 w-20 text-center">Mores</li>
            </ul>
            <div>email: {userInfo?.email}</div>
            <div>birthday: {userInfo?.birthday}</div>
            <div>friends: </div>
            <div className="pl-5rem">
                {userInfo?.friends?.length > 0 ? userInfo.friends.map((friend, index) => {
                    return (<div key={index}>
                        {friend} <button onClick={() => handleUnfriend(friend)}>Unfriend</button>
                    </div>)
                }) : <div>You have no friend</div>}
            </div>
            {error && <div>Error: {error}</div>}
        </div>
    )
}

const Profile = () => {
    return <ProvideUser>
        <ProfileImpl />
    </ProvideUser>
}


export default Profile
