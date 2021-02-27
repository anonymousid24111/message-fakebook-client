import React from 'react'
import { AiOutlineEuroCircle } from 'react-icons/ai'

const ToastError = ({code=404, message="Not connect internet!"}) => {
    return (
        <div className="absolute bottom-0 left-0 bg-gray-700 w-80 h-20 rounded-xl m-5 p-5">
            <AiOutlineEuroCircle/>
            <span>Error: {message}</span>
        </div>
    )
}

export default ToastError
