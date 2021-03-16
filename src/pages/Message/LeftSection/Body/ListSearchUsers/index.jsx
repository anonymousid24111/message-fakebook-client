import React from 'react'

import { useBody } from '../hooks'
import SearchUserElement from './SearchUserElement'

const ListSearchUsers = () => {
    const { listUsers } = useBody()
    return (
        <div className="w-96 h-full absolute top-0 left-0 bg-black p-2">
            {listUsers?.length > 0 ? (
                listUsers.map((user) => {
                    const { _id } = user
                    return <SearchUserElement key={_id} user={user} />
                })
            ) : (
                <div className="loader" />
            )}
        </div>
    )
}

export default ListSearchUsers
