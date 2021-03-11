// import callApiHttp from 'functions/callApiHttp';
import React, { useEffect, useRef, useState } from 'react'
import { ProvideBody, useBody } from './hooks'

import ListConversations from './ListConversations'
import ListSearchUsers from './ListSearchUsers'

const BodyImpl = () => {
    const ref = useRef(null)
    const refInput = useRef(null)
    const refTimeout = useRef(null)

    const [searching, setSearching] = useState(false)
    const [keyword, setKeyword] = useState('')

    const { fetchUsers } = useBody()

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                refInput.current &&
                !refInput.current.contains(event.target)
            ) {
                setSearching(false)
                setKeyword('')
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])

    const handleSearchKeywordChange = (e) => {
        setKeyword(e.target.value)
        if (refTimeout.current) clearTimeout(refTimeout.current)
        refTimeout.current = setTimeout(() => fetchUsers(e.target.value), 600)
    }

    return (
        <>
            <div className="p-4">
                <input
                    ref={refInput}
                    type="text"
                    value={keyword}
                    onChange={(e) => handleSearchKeywordChange(e)}
                    className="w-full rounded-full focus: outline-none bg-gray-600 p-2 "
                    placeholder="Search Message"
                    onFocus={() => setSearching(true)}
                />
            </div>
            <div
                className="relative z-0 h-full"
                ref={ref}
                // onClick={() => setSearching(false)}
            >
                <ListConversations />
                {searching && <ListSearchUsers keyword={keyword} />}
            </div>
        </>
    )
}

const Body = () => (
    <ProvideBody>
        <BodyImpl />
    </ProvideBody>
)

export default Body
