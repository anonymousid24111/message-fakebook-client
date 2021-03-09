import React, { forwardRef, memo, useImperativeHandle, useRef, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BiImageAdd } from "react-icons/bi";
import { RiFileGifFill, RiStarSmileFill } from 'react-icons/ri'
import { FaImages } from 'react-icons/fa'
import { IoSend } from 'react-icons/io5';
import { useMain } from '../hooks';
import { useParams } from 'react-router-dom';
import { API_URL } from 'commons/constants';
import axios from 'axios';
import LikeFacebook from 'components/LikeFacebook';

const Footer = (props, ref) => {
    console.log("render MessageForm" && props)
    const { id } = useParams()
    const [message, setMessage] = useState(sessionStorage.getItem(id) || "")
    const { handleTypingHook, handleSubmitSendMessage, changing, setChanging } = useMain()
    const inputRef = useRef()
    const [file, setFile] = useState([])
    const [imagePreviewUrl, setImagePreviewUrl] = useState([])
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));

    const handleTyping = (e, flag = false) => {
        setMessage(e.target.value)
        if (!e.target.value && changing) {
            setChanging(false)
            handleTypingHook(false)
        }
        if (e.target.value && changing !== flag) {
            setChanging(flag)
            handleTypingHook(flag)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        setChanging(false)
        handleTypingHook(false)
        setImagePreviewUrl([])
        if (file?.length > 0) {
            const formData = new FormData();
            for (let i = 0; i < file.length; i++) {
                formData.append(`images`, file[i])
            }
            var { data } = await axios({
                method: "post",
                url: API_URL + "upload/images",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    'x-access-token': `${localStorage.getItem('token')}`
                },
            })
            console.log('data', data)
            if (data.code === 1000) {
                console.log('data.data', data.data)
                setFile([])
                handleSubmitSendMessage(JSON.stringify(data.data), "images")
            } else {
                setFile([])
                alert("error upload")
            }
        }
        message && handleSubmitSendMessage(message)
        !message && file?.length === 0 && handleSubmitSendMessage(message, "react")
    }

    const handleChangeFile = (e) => {
        e.preventDefault();
        let files = e.target.files;
        for (let i = 0; i < files.length; i += 1) {
            let reader = new FileReader();
            let file = files[i]
            reader.onloadend = () => {
                setFile(x => [...x, file])
                setImagePreviewUrl(x => [...x, reader.result])
            }
            reader.readAsDataURL(file)
            console.log('file', file)
        }

    }
    const handleRemoveFile = (index) => {
        setFile(x => [...x.slice(0, index), ...x.slice(index + 1)])
        setImagePreviewUrl(x => [...x.slice(0, index), ...x.slice(index + 1)])
    }



    return (
        <>
            <BsFillPlusCircleFill className="w-7 h-7 rounded-full fb-cl-main p-1 hover:bg-gray-600 flex-shrink-0" />
            <label htmlFor="image" >
                <FaImages className="w-7 h-7 rounded-full fb-cl-main p-1 hover:bg-gray-600 flex-shrink-0" />
            </label>
            <RiStarSmileFill className="w-7 h-7 rounded-full fb-cl-main p-1 hover:bg-gray-600 flex-shrink-0" />
            <RiFileGifFill className="w-7 h-7 rounded-full fb-cl-main p-1 hover:bg-gray-600 flex-shrink-0" />
            <form onSubmit={handleSubmit} className="w-full mx-2" id="messageForm">
                <div className="w-full rounded-2xl bg-gray-600 p-2 ">
                    {imagePreviewUrl && imagePreviewUrl.map((e, index) => {
                        return (<div className="relative inline-block" key={index}>
                            <img src={e} alt="hihi" className="w-12 h-12 rounded-lg mx-1 " />
                            <AiFillCloseCircle className="absolute top-0 right-0 text-gray-500 w-5 h-5 rounded-full" onClick={() => handleRemoveFile(index)} />
                        </div>)
                    })}
                    {imagePreviewUrl?.length > 0 && <label htmlFor="image" className="inline-block w-12 text-black h-12 p-2 bg-gray-400 rounded-lg"><BiImageAdd size="sm" /></label>}
                    <input id="image" type="file" className="hidden" onChange={e => handleChangeFile(e)} multiple />
                    <input
                        ref={inputRef}
                        type="text"
                        name="message"
                        className="w-full bg-gray-600  focus:outline-none"
                        placeholder="Aa"
                        autoComplete="off"
                        value={message}
                        onInput={e => handleTyping(e, true)}
                        onBlur={e => handleTyping(e, false)}
                    />
                </div>
            </form>
            {message ?
                <button type="submit" className="rounded-full w-7 h-7 bg-opacity-0 cursor-pointer" form="messageForm"><IoSend className="w-7 h-7 rounded-full fb-cl-main p-1 hover:bg-gray-600 flex-shrink-0" /></button> :
                <button type="submit" className="w-7 h-7" form="messageForm">
                    <LikeFacebook />
                </button>
            }
        </>
    )
}

export default memo(forwardRef(Footer))
