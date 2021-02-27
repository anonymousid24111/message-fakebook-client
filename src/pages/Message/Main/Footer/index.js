import React, { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { RiFileGifFill, RiStarSmileFill } from 'react-icons/ri'
import { FaImages } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5';
import { useMain } from '../hooks';
import { useParams } from 'react-router-dom';

const Footer = (props, ref) => {
    console.log("render MessageForm"&&props)
    const { id } = useParams()
    const [message, setMessage] = useState(sessionStorage.getItem(id) || "")
    const { handleSubmitSendMessage } = useMain()
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    const handleTyping = (e, flag = false) => {
        setMessage(e.target.value)
        flag && message ? console.log("emit typing") : console.log("emit done type")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage("")
        handleSubmitSendMessage(message)
    }

    return (
        <>
            <BsFillPlusCircleFill className="footer-right__icon" />
            <FaImages className="footer-right__icon" />
            <RiStarSmileFill className="footer-right__icon" />
            <RiFileGifFill className="footer-right__icon" />
            <form onSubmit={handleSubmit} className="footer-right__input" id="messageForm">
                <input
                    ref={inputRef}
                    type="text"
                    name="message"
                    className="w-full rounded-full focus: outline-none bg-gray-600 p-2 "
                    placeholder="Aa"
                    autoComplete="off"
                    value={message}
                    onChange={e => handleTyping(e, true)}
                    onBlur={e => handleTyping(e, false)}
                />
            </form>
            {message ?
                <button type="submit" className="button-icon" form="messageForm"><IoSend className="footer-right__icon" /></button> :
                <button type="submit" className="button-icon" form="messageForm"><AiFillLike className="footer-right__icon" /></button>
            }
        </>
    )
}

export default memo(forwardRef(Footer))
