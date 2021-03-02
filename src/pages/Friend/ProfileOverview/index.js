import React from 'react'
import { useParams } from 'react-router-dom'

const ProfileOverview = () => {
    const { user_id } = useParams()
    return (
        <div className="flex flex-grow justify-center items-center bg-black">
            Profile of {user_id}
        </div>
    )
}

export default ProfileOverview
