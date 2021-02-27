import React from 'react'

import { useBody } from '../hooks'
import SearchUserElement from './SearchUserElement'
const ListSearchUsers = () => {
    const {listUsers} = useBody()
    return (
        <div className="w-full h-full absolute top-0 left-0 bg-black p-2">
            {listUsers?.length > 0 ? listUsers.map((user, index) => {
                return <SearchUserElement key={index} user={user} />
            }):<div className="loader"></div>
            }
        </div>
    )
}

export default ListSearchUsers
