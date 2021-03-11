/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {
    forwardRef,
    memo,
    useImperativeHandle,
    useRef,
    useState,
} from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BiImageAdd } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import { API_URL } from 'commons/constants'
import axios from 'axios'
import LikeFacebook from 'components/LikeFacebook'
import GEmoji from 'pages/Message/components/GEmoji'
import { useMain } from '../hooks'

const Footer = (props, ref) => {
    const { id } = useParams()
    const [message, setMessage] = useState(sessionStorage.getItem(id) || '')
    const {
        handleTypingHook,
        handleSubmitSendMessage,
        changing,
        setChanging,
    } = useMain()
    const inputRef = useRef()
    const [file, setFile] = useState([])
    const [imagePreviewUrl, setImagePreviewUrl] = useState([])
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
    }))

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
        setMessage('')
        setShowPikerEmoji(false)
        setChanging(false)
        handleTypingHook(false)
        setImagePreviewUrl([])
        if (file?.length > 0) {
            const formData = new FormData()
            for (let i = 0; i < file.length; i += 1) {
                formData.append(`images`, file[i])
            }
            const { data } = await axios({
                method: 'post',
                url: `${API_URL}upload/images`,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': `${localStorage.getItem('token')}`,
                },
            })
            if (data.code === 1000) {
                setFile([])
                handleSubmitSendMessage(JSON.stringify(data.data), 'images')
            } else {
                setFile([])
            }
        }
        message && handleSubmitSendMessage(message)
        !message &&
            file?.length === 0 &&
            handleSubmitSendMessage(message, 'react')
    }

    const handleChangeFile = (e) => {
        e.preventDefault()
        const { files } = e.target
        for (let i = 0; i < files.length; i += 1) {
            const reader = new FileReader()
            const fileE = files[i]
            reader.onloadend = () => {
                setFile((x) => [...x, fileE])
                setImagePreviewUrl((x) => [...x, reader.result])
            }
            reader.readAsDataURL(fileE)
        }
    }
    const handleRemoveFile = (index) => {
        setFile((x) => [...x.slice(0, index), ...x.slice(index + 1)])
        setImagePreviewUrl((x) => [...x.slice(0, index), ...x.slice(index + 1)])
    }

    const handlePickEmoji = (e) => {
        setMessage((x) => x + e)
    }

    const [showPikerEmoji, setShowPikerEmoji] = useState(false)

    return (
        <>
            <svg
                className="w-7 h-7 rounded-full fb-cl-main p-1 hover:bg-gray-600 flex-shrink-0"
                height="20px"
                width="20px"
                viewBox="0 0 24 24"
            >
                <g fillRule="evenodd">
                    <polygon fill="none" points="-6,30 30,30 30,-6 -6,-6 " />
                    <path
                        d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0
                     -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448
                      1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725
                       -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12"
                        fill="#0084FF"
                    />
                </g>
            </svg>
            <label htmlFor="image">
                <svg
                    className="w-7 h-7 rounded-full p-0.5 fb-cl-main hover:bg-gray-600 flex-shrink-0"
                    height="20px"
                    width="20px"
                    viewBox="-1 -3 20 20"
                >
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M2.882 13.13C3.476 4.743 3.773.48 3.773.348L2.195.516c-.7.1-1.478.647-1.478
                     1.647l1.092 11.419c0 .5.2.9.4 1.3.4.2.7.4.9.4h.4c-.6-.6-.727-.951-.627-2.151z"
                            fill="#0084FF"
                        />
                        <circle cx="8.5" cy="4.5" r="1.5" fill="#0084FF" />
                        <path
                            d="M14 6.2c-.2-.2-.6-.3-.8-.1l-2.8 2.4c-.2.1-.2.4 0
                          .6l.6.7c.2.2.2.6-.1.8-.1.1-.2.1-.4.1s-.3-.1-.4-.2L8.3 8.3c-.2-.2-.6-.3-.8-.1l-2.6
                           2-.4 3.1c0 .5.2 1.6.7 1.7l8.8.6c.2 0 .5 0 .7-.2.2-.2.5-.7.6-.9l.6-5.9L14 6.2z"
                            fill="#0084FF"
                        />
                        <path
                            d="M13.9 15.5l-8.2-.7c-.7-.1-1.3-.8-1.3-1.6l1-11.4C5.5 1 6.2.5 7
                                .5l8.2.7c.8.1 1.3.8 1.3 1.6l-1 11.4c-.1.8-.8 1.4-1.6 1.3z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke="#0084FF"
                        />
                    </g>
                </svg>
            </label>
            <svg
                className="w-7 h-7 rounded-full fb-cl-main p-1 hover:bg-gray-600 flex-shrink-0"
                height="20px"
                width="20px"
                viewBox="0 0 17 16"
                x="0px"
                y="0px"
            >
                <g fillRule="evenodd">
                    <circle cx="5.5" cy="5.5" fill="none" r="1" />
                    <circle cx="11.5" cy="4.5" fill="none" r="1" />
                    <path
                        d="M5.3 9c-.2.1-.4.4-.3.7.4 1.1 1.2 1.9 2.3 2.3h.2c.2 0 .4-.1.5-.3.1-.3 0-.5-.3-.6-.8-.4-1.4-1-1.7-1.8-.1-.2-.4-.4-.7-.3z"
                        fill="none"
                    />
                    <path
                        d="M10.4 13.1c0 .9-.4 1.6-.9 2.2 4.1-1.1 6.8-5.1 6.5-9.3-.4.6-1 1.1-1.8 1.5-2 1-3.7 3.6-3.8 5.6z"
                        fill="#0084FF"
                    />
                    <path
                        d="M2.5 13.4c.1.8.6 1.6 1.3 2 .5.4 1.2.6 1.8.6h.6l.4-.1c1.6-.4 2.6-1.5 2.7-2.9.1-2.4
                         2.1-5.4 4.5-6.6 1.3-.7 1.9-1.6 1.9-2.8l-.2-.9c-.1-.8-.6-1.6-1.3-2-.7-.5-1.5-.7-2.4-.5L3.6
                          1.5C1.9 1.8.7 3.4 1 5.2l1.5 8.2zm9-8.9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-3.57
                           6.662c.3.1.4.4.3.6-.1.3-.3.4-.5.4h-.2c-1-.4-1.9-1.3-2.3-2.3-.1-.3.1-.6.3-.7.3-.1.5 0 .6.3.4.8 1
                            1.4 1.8 1.7zM5.5 5.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
                        fillRule="nonzero"
                        fill="#0084FF"
                    />
                </g>
            </svg>
            <svg
                className="w-7 h-7 rounded-full fb-cl-main p-1 hover:bg-gray-600 flex-shrink-0"
                height="20px"
                width="20px"
                viewBox="0 0 16 16"
                x="0px"
                y="0px"
            >
                <path
                    d="M.783 12.705c.4.8 1.017 1.206 1.817 1.606 0 0 1.3.594 2.5.694 1 .1 1.9.1 2.9.1s1.9 0 2.9-.1 1.679-.294
                 2.479-.694c.8-.4 1.157-.906 1.557-1.706.018 0
                  .4-1.405.5-2.505.1-1.2.1-3 0-4.3-.1-1.1-.073-1.976-.473-2.676-.4-.8-.863-1.408-1.763-1.808-.6-.3-1.2-.3-2.4-.4-1.8-.1-3.8-.1-5.7
                   0-1 .1-1.7.1-2.5.5s-1.417 1.1-1.817 1.9c0 0-.4 1.484-.5 2.584-.1 1.2-.1 3 0 4.3.1 1 .2 1.705.5 2.505zm10.498-8.274h2.3c.4 0
                    .769.196.769.696 0 .5-.247.68-.747.68l-1.793.02.022 1.412 1.252-.02c.4 0 .835.204.835.704s-.442.696-.842.696H11.82l-.045
                     2.139c0 .4-.194.8-.694.8-.5 0-.7-.3-.7-.8l-.031-5.631c0-.4.43-.696.93-.696zm-3.285.771c0-.5.3-.8.8-.8s.8.3.8.8l-.037
                      5.579c0 .4-.3.8-.8.8s-.8-.4-.8-.8l.037-5.579zm-3.192-.825c.7 0 1.307.183 1.807.683.3.3.4.7.1 1-.2.4-.7.4-1 .1-.2-.1-.5-.3-.9-.3-1 0-2.011.84-2.011
                       2.14 0 1.3.795 2.227 1.695 2.227.4 0 .805.073 1.105-.127V8.6c0-.4.3-.8.8-.8s.8.3.8.8v1.8c0 .2.037.071-.063.271-.7.7-1.57.991-2.47.991C2.868 11.662 1.3
                        10.2 1.3 8s1.704-3.623 3.504-3.623z"
                    fillRule="nonzero"
                    fill="#0084FF"
                />
            </svg>
            <form
                onSubmit={handleSubmit}
                className="w-full mx-2 relative"
                id="messageForm"
            >
                <div className="w-full flex rounded-2xl bg-gray-600 p-2 ">
                    {imagePreviewUrl &&
                        imagePreviewUrl.map((e, index) => (
                            <div className="relative inline-block" key={e}>
                                <img
                                    src={e}
                                    alt="hihi"
                                    className="w-12 h-12 rounded-lg mx-1 "
                                />
                                <AiFillCloseCircle
                                    className="absolute top-0 right-0 text-gray-500 w-5 h-5 rounded-full"
                                    onClick={() => handleRemoveFile(index)}
                                />
                            </div>
                        ))}
                    {imagePreviewUrl?.length > 0 && (
                        <label
                            htmlFor="image"
                            className="inline-block w-12 text-black h-12 p-2 bg-gray-400 rounded-lg"
                        >
                            <BiImageAdd size="sm" />
                        </label>
                    )}
                    <input
                        id="image"
                        type="file"
                        className="hidden"
                        onChange={(e) => handleChangeFile(e)}
                        multiple
                    />
                    <input
                        ref={inputRef}
                        type="text"
                        name="message"
                        className="flex-grow bg-gray-600  focus:outline-none"
                        placeholder="Aa"
                        autoComplete="off"
                        value={message}
                        onInput={(e) => handleTyping(e, true)}
                        onBlur={(e) => handleTyping(e, false)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPikerEmoji((x) => !x)}
                    >
                        <svg height="20px" width="20px" viewBox="0 0 38 38">
                            <g fill="gray" fillRule="evenodd">
                                <g transform="translate(-893.000000, -701.000000)">
                                    <g transform="translate(709.000000, 314.000000)">
                                        <g>
                                            <path
                                                d="M210.5,405 C209.121,405 208,403.879 208,402.5 C208,401.121
                                         209.121,400 210.5,400 C211.879,400 213,401.121 213,402.5 C213,403.879
                                          211.879,405 210.5,405 M212.572,411.549 C210.428,413.742 206.938,415 203,415
                                           C199.062,415 195.572,413.742 193.428,411.549 C192.849,410.956 192.859,410.007
                                            193.451,409.428 C194.045,408.85 194.993,408.859 195.572,409.451 C197.133,411.047
                                             199.909,412 203,412 C206.091,412 208.867,411.047 210.428,409.451 C211.007,408.859
                                              211.956,408.85 212.549,409.428 C213.141,410.007 213.151,410.956 212.572,411.549
                                               M195.5,400 C196.879,400 198,401.121 198,402.5 C198,403.879 196.879,405 195.5,405
                                                C194.121,405 193,403.879 193,402.5 C193,401.121 194.121,400 195.5,400 M203,387
                                                 C192.523,387 184,395.523 184,406 C184,416.477 192.523,425 203,425 C213.477,425
                                                  222,416.477 222,406 C222,395.523 213.477,387 203,387"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <GEmoji
                    onPickEmoji={(e) => handlePickEmoji(e)}
                    isOpen={showPikerEmoji}
                    setOpen={(e) => setShowPikerEmoji(e)}
                />
            </form>
            {message ? (
                <button
                    type="submit"
                    className="flex-shrink-0 rounded-full w-9 h-9 bg-opacity-0 cursor-pointer hover:bg-gray-600 p-2 focus:outline-none"
                    form="messageForm"
                >
                    <svg
                        className="crt8y2ji"
                        height="20px"
                        width="20px"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
                            fillRule="evenodd"
                            stroke="none"
                            fill="#0084FF"
                        />
                    </svg>
                </button>
            ) : (
                <button
                    type="submit"
                    className="flex-shrink-0 rounded-full w-9 h-9 bg-opacity-0 cursor-pointer hover:bg-gray-600 p-1 focus:outline-none"
                    form="messageForm"
                >
                    <LikeFacebook />
                </button>
            )}
        </>
    )
}

export default memo(forwardRef(Footer))
