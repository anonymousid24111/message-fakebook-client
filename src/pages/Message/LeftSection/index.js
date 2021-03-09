import Header from './Header'
import React, { useMemo } from 'react'
import Body from './Body'

const LeftSection = () => {
    const memoHeader= useMemo(() => <Header />, [])
    const memeBody = useMemo(() => <Body/>, [])
    return (
        <div className="container-left flex flex-col">
            {memoHeader}
            {memeBody}
        </div>
    )
}

export default LeftSection
