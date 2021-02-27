import Header from './Header'
import React, { useMemo } from 'react'
import Body from './Body'

const LeftSection = () => {
    const memoHeader= useMemo(() => <Header />, [])
    const memeBody = useMemo(() => <Body/>, [])
    return (
        <div className="container-left">
            {memoHeader}
            {memeBody}
        </div>
    )
}

export default LeftSection
