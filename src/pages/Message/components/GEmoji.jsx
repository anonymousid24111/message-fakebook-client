import React, { useEffect, useRef } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

const GEmoji = ({ onPickEmoji, isOpen = false, setOpen }) => {
    const emojiRef = useRef()
    useEffect(() => {
        const handlePickEmoji = (event) => {
            if (emojiRef && !emojiRef.current.contains(event.target)) {
                setOpen && setOpen(false)
            } else {
                event.target.alt && onPickEmoji && onPickEmoji(event.target.alt)
            }
        }
        document.addEventListener('mousedown', handlePickEmoji)
        return () => {
            document.removeEventListener('mousedown', handlePickEmoji)
        }
    }, [onPickEmoji, setOpen])

    return (
        <div
            ref={emojiRef}
            className={classnames(
                'absolute bottom-full right-0 flex fb-bg-dark max-w-xs flex-wrap p-1 h-56 overflow-auto rounded-lg',
                { hidden: !isOpen }
            )}
        >
            <img
                alt="🙂"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t86/1.5/28/1f642.png"
                width="28"
            />

            <img
                alt="🇪"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5f/1.5/28/1f1ea.png"
                width="28"
            />

            <img
                alt="🤮"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbe/1.5/28/1f92e.png"
                width="28"
            />

            <img
                alt="😌"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbb/1.5/28/1f60c.png"
                width="28"
            />

            <img
                alt="😊"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb9/1.5/28/1f60a.png"
                width="28"
            />

            <img
                alt="😢"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/28/1f622.png"
                width="28"
            />

            <img
                alt="👋"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1.5/28/1f44b.png"
                width="28"
            />

            <img
                alt="🙃"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/28/1f643.png"
                width="28"
            />

            <img
                alt="😀"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8/1.5/28/1f600.png"
                width="28"
            />

            <img
                alt="😃"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8b/1.5/28/1f603.png"
                width="28"
            />

            <img
                alt="😄"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc/1.5/28/1f604.png"
                width="28"
            />

            <img
                alt="😁"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t89/1.5/28/1f601.png"
                width="28"
            />

            <img
                alt="😆"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te/1.5/28/1f606.png"
                width="28"
            />

            <img
                alt="😅"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8d/1.5/28/1f605.png"
                width="28"
            />

            <img
                alt="😂"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1.5/28/1f602.png"
                width="28"
            />

            <img
                alt="🤣"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8c/1.5/28/1f923.png"
                width="28"
            />

            <img
                alt="☺️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t81/1.5/28/263a.png"
                width="28"
            />

            <img
                alt="😊"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb9/1.5/28/1f60a.png"
                width="28"
            />

            <img
                alt="😇"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8f/1.5/28/1f607.png"
                width="28"
            />

            <img
                alt="🙂"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t86/1.5/28/1f642.png"
                width="28"
            />

            <img
                alt="🙃"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7/1.5/28/1f643.png"
                width="28"
            />

            <img
                alt="😉"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f609.png"
                width="28"
            />

            <img
                alt="😌"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbb/1.5/28/1f60c.png"
                width="28"
            />

            <img
                alt="😍"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3c/1.5/28/1f60d.png"
                width="28"
            />

            <img
                alt="🥰"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t24/1.5/28/1f970.png"
                width="28"
            />

            <img
                alt="😘"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/taf/1.5/28/1f618.png"
                width="28"
            />

            <img
                alt="😗"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2e/1.5/28/1f617.png"
                width="28"
            />

            <img
                alt="😙"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t30/1.5/28/1f619.png"
                width="28"
            />

            <img
                alt="😚"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t58/1.5/28/1f61a.png"
                width="28"
            />

            <img
                alt="😋"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3a/1.5/28/1f60b.png"
                width="28"
            />

            <img
                alt="😛"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/28/1f61b.png"
                width="28"
            />

            <img
                alt="😝"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tdb/1.5/28/1f61d.png"
                width="28"
            />

            <img
                alt="😜"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5a/1.5/28/1f61c.png"
                width="28"
            />

            <img
                alt="🤪"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/28/1f92a.png"
                width="28"
            />

            <img
                alt="🤨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t11/1.5/28/1f928.png"
                width="28"
            />

            <img
                alt="🧐"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t17/1.5/28/1f9d0.png"
                width="28"
            />

            <img
                alt="🤓"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ted/1.5/28/1f913.png"
                width="28"
            />

            <img
                alt="😎"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbd/1.5/28/1f60e.png"
                width="28"
            />

            <img
                alt="🤩"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t92/1.5/28/1f929.png"
                width="28"
            />

            <img
                alt="🥳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta7/1.5/28/1f973.png"
                width="28"
            />

            <img
                alt="😏"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3e/1.5/28/1f60f.png"
                width="28"
            />

            <img
                alt="😒"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta9/1.5/28/1f612.png"
                width="28"
            />

            <img
                alt="😞"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5c/1.5/28/1f61e.png"
                width="28"
            />

            <img
                alt="😔"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tab/1.5/28/1f614.png"
                width="28"
            />

            <img
                alt="😟"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tdd/1.5/28/1f61f.png"
                width="28"
            />

            <img
                alt="😕"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2c/1.5/28/1f615.png"
                width="28"
            />

            <img
                alt="🙁"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5/1.5/28/1f641.png"
                width="28"
            />

            <img
                alt="☹️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t59/1.5/28/2639.png"
                width="28"
            />

            <img
                alt="😣"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc9/1.5/28/1f623.png"
                width="28"
            />

            <img
                alt="😖"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tad/1.5/28/1f616.png"
                width="28"
            />

            <img
                alt="😫"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t78/1.5/28/1f62b.png"
                width="28"
            />

            <img
                alt="😩"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcf/1.5/28/1f629.png"
                width="28"
            />

            <img
                alt="🥺"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td5/1.5/28/1f97a.png"
                width="28"
            />

            <img
                alt="😢"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/28/1f622.png"
                width="28"
            />

            <img
                alt="😭"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f62d.png"
                width="28"
            />

            <img
                alt="😤"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4a/1.5/28/1f624.png"
                width="28"
            />

            <img
                alt="😠"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f620.png"
                width="28"
            />

            <img
                alt="😡"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f621.png"
                width="28"
            />

            <img
                alt="🤬"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbc/1.5/28/1f92c.png"
                width="28"
            />

            <img
                alt="🤯"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3f/1.5/28/1f92f.png"
                width="28"
            />

            <img
                alt="😳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/1f633.png"
                width="28"
            />

            <img
                alt="🥵"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta9/1.5/28/1f975.png"
                width="28"
            />

            <img
                alt="🥶"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f976.png"
                width="28"
            />

            <img
                alt="😱"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/1f631.png"
                width="28"
            />

            <img
                alt="😨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4e/1.5/28/1f628.png"
                width="28"
            />

            <img
                alt="😰"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/1f630.png"
                width="28"
            />

            <img
                alt="😥"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcb/1.5/28/1f625.png"
                width="28"
            />

            <img
                alt="😓"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f613.png"
                width="28"
            />

            <img
                alt="🤗"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf1/1.5/28/1f917.png"
                width="28"
            />

            <img
                alt="🤔"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1.5/28/1f914.png"
                width="28"
            />

            <img
                alt="🤭"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f92d.png"
                width="28"
            />

            <img
                alt="🤫"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f92b.png"
                width="28"
            />

            <img
                alt="🤥"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f925.png"
                width="28"
            />

            <img
                alt="😶"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f636.png"
                width="28"
            />

            <img
                alt="😐"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta7/1.5/28/1f610.png"
                width="28"
            />

            <img
                alt="😑"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f611.png"
                width="28"
            />

            <img
                alt="😬"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f62c.png"
                width="28"
            />

            <img
                alt="🙄"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t88/1.5/28/1f644.png"
                width="28"
            />

            <img
                alt="😯"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7c/1.5/28/1f62f.png"
                width="28"
            />

            <img
                alt="😦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/28/1f626.png"
                width="28"
            />

            <img
                alt="😧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcd/1.5/28/1f627.png"
                width="28"
            />

            <img
                alt="😮"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfb/1.5/28/1f62e.png"
                width="28"
            />

            <img
                alt="😲"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f632.png"
                width="28"
            />

            <img
                alt="🥱"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta5/1.5/28/1f971.png"
                width="28"
            />

            <img
                alt="😴"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te9/1.5/28/1f634.png"
                width="28"
            />

            <img
                alt="🤤"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td/1.5/28/1f924.png"
                width="28"
            />

            <img
                alt="😪"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf7/1.5/28/1f62a.png"
                width="28"
            />

            <img
                alt="😵"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6a/1.5/28/1f635.png"
                width="28"
            />

            <img
                alt="🤐"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6a/1.5/28/1f910.png"
                width="28"
            />

            <img
                alt="🥴"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f974.png"
                width="28"
            />

            <img
                alt="🤢"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f922.png"
                width="28"
            />

            <img
                alt="🤮"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbe/1.5/28/1f92e.png"
                width="28"
            />

            <img
                alt="🤧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f927.png"
                width="28"
            />

            <img
                alt="😷"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/1.5/28/1f637.png"
                width="28"
            />

            <img
                alt="🤒"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6c/1.5/28/1f912.png"
                width="28"
            />

            <img
                alt="🤕"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1.5/28/1f915.png"
                width="28"
            />

            <img
                alt="🤑"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f911.png"
                width="28"
            />

            <img
                alt="🤠"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9/1.5/28/1f920.png"
                width="28"
            />

            <img
                alt="😈"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f608.png"
                width="28"
            />

            <img
                alt="👿"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f47f.png"
                width="28"
            />

            <img
                alt="👹"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/1f479.png"
                width="28"
            />

            <img
                alt="👺"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f47a.png"
                width="28"
            />

            <img
                alt="🤡"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8a/1.5/28/1f921.png"
                width="28"
            />

            <img
                alt="💩"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f4a9.png"
                width="28"
            />

            <img
                alt="👻"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t11/1.5/28/1f47b.png"
                width="28"
            />

            <img
                alt="💀"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f480.png"
                width="28"
            />

            <img
                alt="☠️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t31/1.5/28/2620.png"
                width="28"
            />

            <img
                alt="👽"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t13/1.5/28/1f47d.png"
                width="28"
            />

            <img
                alt="👾"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t94/1.5/28/1f47e.png"
                width="28"
            />

            <img
                alt="🤖"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f916.png"
                width="28"
            />

            <img
                alt="🎃"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc0/1.5/28/1f383.png"
                width="28"
            />

            <img
                alt="😺"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t96/1.5/28/1f63a.png"
                width="28"
            />

            <img
                alt="😸"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ted/1.5/28/1f638.png"
                width="28"
            />

            <img
                alt="😹"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6e/1.5/28/1f639.png"
                width="28"
            />

            <img
                alt="😻"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t17/1.5/28/1f63b.png"
                width="28"
            />

            <img
                alt="😼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t98/1.5/28/1f63c.png"
                width="28"
            />

            <img
                alt="😽"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t19/1.5/28/1f63d.png"
                width="28"
            />

            <img
                alt="🙀"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f640.png"
                width="28"
            />

            <img
                alt="😿"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f63f.png"
                width="28"
            />

            <img
                alt="😾"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/1.5/28/1f63e.png"
                width="28"
            />

            <img
                alt="🤲"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/taa/1.5/28/1f932.png"
                width="28"
            />

            <img
                alt="👐"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/1.5/28/1f450.png"
                width="28"
            />

            <img
                alt="🙌"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t37/1.5/28/1f64c.png"
                width="28"
            />

            <img
                alt="👏"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f44f.png"
                width="28"
            />

            <img
                alt="🤝"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9e/1.5/28/1f91d.png"
                width="28"
            />

            <img
                alt="👍"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t36/1.5/28/1f44d.png"
                width="28"
            />

            <img
                alt="👎"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb7/1.5/28/1f44e.png"
                width="28"
            />

            <img
                alt="👊"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb3/1.5/28/1f44a.png"
                width="28"
            />

            <img
                alt="✊"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/270a.png"
                width="28"
            />

            <img
                alt="🤛"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9c/1.5/28/1f91b.png"
                width="28"
            />

            <img
                alt="🤜"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f91c.png"
                width="28"
            />

            <img
                alt="🤞"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1f/1.5/28/1f91e.png"
                width="28"
            />

            <img
                alt="✌️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/270c.png"
                width="28"
            />

            <img
                alt="🤟"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/1.5/28/1f91f.png"
                width="28"
            />

            <img
                alt="🤘"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1.5/28/1f918.png"
                width="28"
            />

            <img
                alt="👌"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb5/1.5/28/1f44c.png"
                width="28"
            />

            <img
                alt="🤏"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1/1.5/28/1f90f.png"
                width="28"
            />

            <img
                alt="👈"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta/1.5/28/1f448.png"
                width="28"
            />

            <img
                alt="👉"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8b/1.5/28/1f449.png"
                width="28"
            />

            <img
                alt="👆"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8/1.5/28/1f446.png"
                width="28"
            />

            <img
                alt="👇"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t89/1.5/28/1f447.png"
                width="28"
            />

            <img
                alt="☝️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc6/1.5/28/261d.png"
                width="28"
            />

            <img
                alt="✋"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/270b.png"
                width="28"
            />

            <img
                alt="🤚"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f91a.png"
                width="28"
            />

            <img
                alt="🖐"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f590.png"
                width="28"
            />

            <img
                alt="🖖"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f596.png"
                width="28"
            />

            <img
                alt="👋"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t34/1.5/28/1f44b.png"
                width="28"
            />

            <img
                alt="🤙"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f919.png"
                width="28"
            />

            <img
                alt="💪"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta6/1.5/28/1f4aa.png"
                width="28"
            />

            <img
                alt="🦾"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f9be.png"
                width="28"
            />

            <img
                alt="🖕"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f595.png"
                width="28"
            />

            <img
                alt="✍️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t68/1.5/28/270d.png"
                width="28"
            />

            <img
                alt="🙏"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/28/1f64f.png"
                width="28"
            />

            <img
                alt="🦶"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tdf/1.5/28/1f9b6.png"
                width="28"
            />

            <img
                alt="🦵"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f9b5.png"
                width="28"
            />

            <img
                alt="🦿"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf/1.5/28/1f9bf.png"
                width="28"
            />

            <img
                alt="💄"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t82/1.5/28/1f484.png"
                width="28"
            />

            <img
                alt="💋"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb0/1.5/28/1f48b.png"
                width="28"
            />

            <img
                alt="👄"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6/1.5/28/1f444.png"
                width="28"
            />

            <img
                alt="🦷"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f9b7.png"
                width="28"
            />

            <img
                alt="👅"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t87/1.5/28/1f445.png"
                width="28"
            />

            <img
                alt="👂"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4/1.5/28/1f442.png"
                width="28"
            />

            <img
                alt="🦻"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f9bb.png"
                width="28"
            />

            <img
                alt="👃"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t85/1.5/28/1f443.png"
                width="28"
            />

            <img
                alt="👣"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc3/1.5/28/1f463.png"
                width="28"
            />

            <img
                alt="👁"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t83/1.5/28/1f441.png"
                width="28"
            />

            <img
                alt="👀"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1.5/28/1f440.png"
                width="28"
            />

            <img
                alt="🧠"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1.5/28/1f9e0.png"
                width="28"
            />

            <img
                alt="🗣"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f5e3.png"
                width="28"
            />

            <img
                alt="👤"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f464.png"
                width="28"
            />

            <img
                alt="👥"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc5/1.5/28/1f465.png"
                width="28"
            />

            <img
                alt="👶"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/1f476.png"
                width="28"
            />

            <img
                alt="👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f467.png"
                width="28"
            />

            <img
                alt="🧒"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t19/1.5/28/1f9d2.png"
                width="28"
            />

            <img
                alt="👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f466.png"
                width="28"
            />

            <img
                alt="👩"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc9/1.5/28/1f469.png"
                width="28"
            />

            <img
                alt="🧑"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t98/1.5/28/1f9d1.png"
                width="28"
            />

            <img
                alt="👨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/28/1f468.png"
                width="28"
            />

            <img
                alt="👩‍🦱"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t12/1.5/28/1f469_200d_1f9b1.png"
                width="28"
            />

            <img
                alt="🧑‍🦱"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f9d1_200d_1f9b1.png"
                width="28"
            />

            <img
                alt="👨‍🦱"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1.5/28/1f468_200d_1f9b1.png"
                width="28"
            />

            <img
                alt="👩‍🦰"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f469_200d_1f9b0.png"
                width="28"
            />

            <img
                alt="🧑‍🦰"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f9d1_200d_1f9b0.png"
                width="28"
            />

            <img
                alt="👨‍🦰"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f468_200d_1f9b0.png"
                width="28"
            />

            <img
                alt="👱‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8e/1.5/28/1f471_200d_2640.png"
                width="28"
            />

            <img
                alt="👱"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f471.png"
                width="28"
            />

            <img
                alt="👱‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t90/1.5/28/1f471_200d_2642.png"
                width="28"
            />

            <img
                alt="👩‍🦳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t14/1.5/28/1f469_200d_1f9b3.png"
                width="28"
            />

            <img
                alt="👨‍🦳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f468_200d_1f9b3.png"
                width="28"
            />

            <img
                alt="👩‍🦲"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t93/1.5/28/1f469_200d_1f9b2.png"
                width="28"
            />

            <img
                alt="👨‍🦲"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/28/1f468_200d_1f9b2.png"
                width="28"
            />

            <img
                alt="🧔"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f9d4.png"
                width="28"
            />

            <img
                alt="👵"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f475.png"
                width="28"
            />

            <img
                alt="🧓"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/1.5/28/1f9d3.png"
                width="28"
            />

            <img
                alt="👴"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f474.png"
                width="28"
            />

            <img
                alt="👲"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te1/1.5/28/1f472.png"
                width="28"
            />

            <img
                alt="👳‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f473_200d_2640.png"
                width="28"
            />

            <img
                alt="👳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f473.png"
                width="28"
            />

            <img
                alt="👳‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t12/1.5/28/1f473_200d_2642.png"
                width="28"
            />

            <img
                alt="🧕"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9c/1.5/28/1f9d5.png"
                width="28"
            />

            <img
                alt="👮‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te3/1.5/28/1f46e_200d_2640.png"
                width="28"
            />

            <img
                alt="👮"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf5/1.5/28/1f46e.png"
                width="28"
            />

            <img
                alt="👮‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te5/1.5/28/1f46e_200d_2642.png"
                width="28"
            />

            <img
                alt="👷‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t14/1.5/28/1f477_200d_2640.png"
                width="28"
            />

            <img
                alt="👷"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/1f477.png"
                width="28"
            />

            <img
                alt="👷‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t16/1.5/28/1f477_200d_2642.png"
                width="28"
            />

            <img
                alt="💂‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f482_200d_2640.png"
                width="28"
            />

            <img
                alt="💂"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t80/1.5/28/1f482.png"
                width="28"
            />

            <img
                alt="💂‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb0/1.5/28/1f482_200d_2642.png"
                width="28"
            />

            <img
                alt="🕵️‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t93/1.5/28/1f575_200d_2640.png"
                width="28"
            />

            <img
                alt="🕵️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta5/1.5/28/1f575.png"
                width="28"
            />

            <img
                alt="🕵️‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t95/1.5/28/1f575_200d_2642.png"
                width="28"
            />

            <img
                alt="👩‍⚕️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t57/1.5/28/1f469_200d_2695.png"
                width="28"
            />

            <img
                alt="🧑‍⚕️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/1f9d1_200d_2695.png"
                width="28"
            />

            <img
                alt="👨‍⚕️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t16/1.5/28/1f468_200d_2695.png"
                width="28"
            />

            <img
                alt="👩‍🌾"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8f/1.5/28/1f469_200d_1f33e.png"
                width="28"
            />

            <img
                alt="🧑‍🌾"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t60/1.5/28/1f9d1_200d_1f33e.png"
                width="28"
            />

            <img
                alt="👨‍🌾"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb0/1.5/28/1f468_200d_1f33e.png"
                width="28"
            />

            <img
                alt="👩‍🍳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/28/1f469_200d_1f373.png"
                width="28"
            />

            <img
                alt="🧑‍🍳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/taa/1.5/28/1f9d1_200d_1f373.png"
                width="28"
            />

            <img
                alt="👨‍🍳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfa/1.5/28/1f468_200d_1f373.png"
                width="28"
            />

            <img
                alt="👩‍🎓"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t17/1.5/28/1f469_200d_1f393.png"
                width="28"
            />

            <img
                alt="🧑‍🎓"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te8/1.5/28/1f9d1_200d_1f393.png"
                width="28"
            />

            <img
                alt="👨‍🎓"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f468_200d_1f393.png"
                width="28"
            />

            <img
                alt="👩‍🎤"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_1f3a4.png"
                width="28"
            />

            <img
                alt="🧑‍🎤"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t41/1.5/28/1f9d1_200d_1f3a4.png"
                width="28"
            />

            <img
                alt="👨‍🎤"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f468_200d_1f3a4.png"
                width="28"
            />

            <img
                alt="👩‍🏫"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1a/1.5/28/1f469_200d_1f3eb.png"
                width="28"
            />

            <img
                alt="🧑‍🏫"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/teb/1.5/28/1f9d1_200d_1f3eb.png"
                width="28"
            />

            <img
                alt="👨‍🏫"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f468_200d_1f3eb.png"
                width="28"
            />

            <img
                alt="👩‍🏭"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1.5/28/1f469_200d_1f3ed.png"
                width="28"
            />

            <img
                alt="🧑‍🏭"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ted/1.5/28/1f9d1_200d_1f3ed.png"
                width="28"
            />

            <img
                alt="👨‍🏭"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f468_200d_1f3ed.png"
                width="28"
            />

            <img
                alt="👩‍💻"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7e/1.5/28/1f469_200d_1f4bb.png"
                width="28"
            />

            <img
                alt="🧑‍💻"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4f/1.5/28/1f9d1_200d_1f4bb.png"
                width="28"
            />

            <img
                alt="👨‍💻"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/1.5/28/1f468_200d_1f4bb.png"
                width="28"
            />

            <img
                alt="👩‍💼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tff/1.5/28/1f469_200d_1f4bc.png"
                width="28"
            />

            <img
                alt="🧑‍💼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f9d1_200d_1f4bc.png"
                width="28"
            />

            <img
                alt="👨‍💼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t20/1.5/28/1f468_200d_1f4bc.png"
                width="28"
            />

            <img
                alt="👩‍🔧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f469_200d_1f527.png"
                width="28"
            />

            <img
                alt="🧑‍🔧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f9d1_200d_1f527.png"
                width="28"
            />

            <img
                alt="👨‍🔧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f468_200d_1f527.png"
                width="28"
            />

            <img
                alt="👩‍🔬"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_1f52c.png"
                width="28"
            />

            <img
                alt="🧑‍🔬"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t41/1.5/28/1f9d1_200d_1f52c.png"
                width="28"
            />

            <img
                alt="👨‍🔬"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t91/1.5/28/1f468_200d_1f52c.png"
                width="28"
            />

            <img
                alt="👩‍🎨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t74/1.5/28/1f469_200d_1f3a8.png"
                width="28"
            />

            <img
                alt="🧑‍🎨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t45/1.5/28/1f9d1_200d_1f3a8.png"
                width="28"
            />

            <img
                alt="👨‍🎨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t95/1.5/28/1f468_200d_1f3a8.png"
                width="28"
            />

            <img
                alt="👩‍🚒"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t59/1.5/28/1f469_200d_1f692.png"
                width="28"
            />

            <img
                alt="🧑‍🚒"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f9d1_200d_1f692.png"
                width="28"
            />

            <img
                alt="👨‍🚒"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f468_200d_1f692.png"
                width="28"
            />

            <img
                alt="👩‍✈️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f469_200d_2708.png"
                width="28"
            />

            <img
                alt="🧑‍✈️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t93/1.5/28/1f9d1_200d_2708.png"
                width="28"
            />

            <img
                alt="👨‍✈️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t43/1.5/28/1f468_200d_2708.png"
                width="28"
            />

            <img
                alt="👩‍🚀"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb8/1.5/28/1f469_200d_1f680.png"
                width="28"
            />

            <img
                alt="🧑‍🚀"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t89/1.5/28/1f9d1_200d_1f680.png"
                width="28"
            />

            <img
                alt="👨‍🚀"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/28/1f468_200d_1f680.png"
                width="28"
            />

            <img
                alt="👩‍⚖️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td8/1.5/28/1f469_200d_2696.png"
                width="28"
            />

            <img
                alt="🧑‍⚖️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f9d1_200d_2696.png"
                width="28"
            />

            <img
                alt="👨‍⚖️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t97/1.5/28/1f468_200d_2696.png"
                width="28"
            />

            <img
                alt="👰"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tdf/1.5/28/1f470.png"
                width="28"
            />

            <img
                alt="🤵"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1.5/28/1f935.png"
                width="28"
            />

            <img
                alt="👸"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te7/1.5/28/1f478.png"
                width="28"
            />

            <img
                alt="🤴"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1.5/28/1f934.png"
                width="28"
            />

            <img
                alt="🦸‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcf/1.5/28/1f9b8_200d_2640.png"
                width="28"
            />

            <img
                alt="🦸"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te1/1.5/28/1f9b8.png"
                width="28"
            />

            <img
                alt="🦸‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td1/1.5/28/1f9b8_200d_2642.png"
                width="28"
            />

            <img
                alt="🦹‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t10/1.5/28/1f9b9_200d_2640.png"
                width="28"
            />

            <img
                alt="🦹"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t62/1.5/28/1f9b9.png"
                width="28"
            />

            <img
                alt="🦹‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t12/1.5/28/1f9b9_200d_2642.png"
                width="28"
            />

            <img
                alt="🤶"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f936.png"
                width="28"
            />

            <img
                alt="🎅"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc2/1.5/28/1f385.png"
                width="28"
            />

            <img
                alt="🧙‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tce/1.5/28/1f9d9_200d_2640.png"
                width="28"
            />

            <img
                alt="🧙"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/1.5/28/1f9d9.png"
                width="28"
            />

            <img
                alt="🧙‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f9d9_200d_2642.png"
                width="28"
            />

            <img
                alt="🧝‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb9/1.5/28/1f9dd_200d_2640.png"
                width="28"
            />

            <img
                alt="🧝"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4b/1.5/28/1f9dd.png"
                width="28"
            />

            <img
                alt="🧝‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbb/1.5/28/1f9dd_200d_2642.png"
                width="28"
            />

            <img
                alt="🧛‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t37/1.5/28/1f9db_200d_2640.png"
                width="28"
            />

            <img
                alt="🧛"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t49/1.5/28/1f9db.png"
                width="28"
            />

            <img
                alt="🧛‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1.5/28/1f9db_200d_2642.png"
                width="28"
            />

            <img
                alt="🧟‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f9df_200d_2640.png"
                width="28"
            />

            <img
                alt="🧟"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4d/1.5/28/1f9df.png"
                width="28"
            />

            <img
                alt="🧟‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f9df_200d_2642.png"
                width="28"
            />

            <img
                alt="🧞‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfa/1.5/28/1f9de_200d_2640.png"
                width="28"
            />

            <img
                alt="🧞"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcc/1.5/28/1f9de.png"
                width="28"
            />

            <img
                alt="🧞‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfc/1.5/28/1f9de_200d_2642.png"
                width="28"
            />

            <img
                alt="🧜‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t78/1.5/28/1f9dc_200d_2640.png"
                width="28"
            />

            <img
                alt="🧜"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tca/1.5/28/1f9dc.png"
                width="28"
            />

            <img
                alt="🧜‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7a/1.5/28/1f9dc_200d_2642.png"
                width="28"
            />

            <img
                alt="🧚‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1.5/28/1f9da_200d_2640.png"
                width="28"
            />

            <img
                alt="🧚"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc8/1.5/28/1f9da.png"
                width="28"
            />

            <img
                alt="🧚‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf8/1.5/28/1f9da_200d_2642.png"
                width="28"
            />

            <img
                alt="👼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t92/1.5/28/1f47c.png"
                width="28"
            />

            <img
                alt="🤰"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta8/1.5/28/1f930.png"
                width="28"
            />

            <img
                alt="🤱"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t29/1.5/28/1f931.png"
                width="28"
            />

            <img
                alt="🙇‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t79/1.5/28/1f647_200d_2640.png"
                width="28"
            />

            <img
                alt="🙇"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f647.png"
                width="28"
            />

            <img
                alt="🙇‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7b/1.5/28/1f647_200d_2642.png"
                width="28"
            />

            <img
                alt="💁‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6d/1.5/28/1f481_200d_2640.png"
                width="28"
            />

            <img
                alt="💁"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tff/1.5/28/1f481.png"
                width="28"
            />

            <img
                alt="💁‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6f/1.5/28/1f481_200d_2642.png"
                width="28"
            />

            <img
                alt="🙅‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf7/1.5/28/1f645_200d_2640.png"
                width="28"
            />

            <img
                alt="🙅"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9/1.5/28/1f645.png"
                width="28"
            />

            <img
                alt="🙅‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f645_200d_2642.png"
                width="28"
            />

            <img
                alt="🙆‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1.5/28/1f646_200d_2640.png"
                width="28"
            />

            <img
                alt="🙆"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8a/1.5/28/1f646.png"
                width="28"
            />

            <img
                alt="🙆‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3a/1.5/28/1f646_200d_2642.png"
                width="28"
            />

            <img
                alt="🙋‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t64/1.5/28/1f64b_200d_2640.png"
                width="28"
            />

            <img
                alt="🙋"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb6/1.5/28/1f64b.png"
                width="28"
            />

            <img
                alt="🙋‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/28/1f64b_200d_2642.png"
                width="28"
            />

            <img
                alt="🧏‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5c/1.5/28/1f9cf_200d_2640.png"
                width="28"
            />

            <img
                alt="🧏"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tae/1.5/28/1f9cf.png"
                width="28"
            />

            <img
                alt="🧏‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5e/1.5/28/1f9cf_200d_2642.png"
                width="28"
            />

            <img
                alt="🤦‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7d/1.5/28/1f926_200d_2640.png"
                width="28"
            />

            <img
                alt="🤦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf/1.5/28/1f926.png"
                width="28"
            />

            <img
                alt="🤦‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7f/1.5/28/1f926_200d_2642.png"
                width="28"
            />

            <img
                alt="🤷‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9d/1.5/28/1f937_200d_2640.png"
                width="28"
            />

            <img
                alt="🤷"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2f/1.5/28/1f937.png"
                width="28"
            />

            <img
                alt="🤷‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9f/1.5/28/1f937_200d_2642.png"
                width="28"
            />

            <img
                alt="🙎‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t27/1.5/28/1f64e_200d_2640.png"
                width="28"
            />
            <img
                alt="🙎"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1.5/28/1f64e.png"
                width="28"
            />
            <img
                alt="🙎‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t29/1.5/28/1f64e_200d_2642.png"
                width="28"
            />
            <img
                alt="🙍‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te6/1.5/28/1f64d_200d_2640.png"
                width="28"
            />
            <img
                alt="🙍🏽"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t35/1.5/28/1f64d_1f3fd.png"
                width="28"
            />
            <img
                alt="🙍‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te8/1.5/28/1f64d_200d_2642.png"
                width="28"
            />
            <img
                alt="💇‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f487_200d_2640.png"
                width="28"
            />
            <img
                alt="💇"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5/1.5/28/1f487.png"
                width="28"
            />
            <img
                alt="💇‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf5/1.5/28/1f487_200d_2642.png"
                width="28"
            />
            <img
                alt="💆‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f486_200d_2640.png"
                width="28"
            />
            <img
                alt="💆"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t84/1.5/28/1f486.png"
                width="28"
            />
            <img
                alt="💆‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb4/1.5/28/1f486_200d_2642.png"
                width="28"
            />
            <img
                alt="🧖‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb/1.5/28/1f9d6_200d_2640.png"
                width="28"
            />
            <img
                alt="🧖"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f9d6.png"
                width="28"
            />
            <img
                alt="🧖‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td/1.5/28/1f9d6_200d_2642.png"
                width="28"
            />
            <img
                alt="💅"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3/1.5/28/1f485.png"
                width="28"
            />
            <img
                alt="🤳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2b/1.5/28/1f933.png"
                width="28"
            />
            <img
                alt="💃"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1/1.5/28/1f483.png"
                width="28"
            />
            <img
                alt="🕺"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td1/1.5/28/1f57a.png"
                width="28"
            />
            <img
                alt="👯‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t24/1.5/28/1f46f_200d_2640.png"
                width="28"
            />
            <img
                alt="👯"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t76/1.5/28/1f46f.png"
                width="28"
            />
            <img
                alt="👯‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t26/1.5/28/1f46f_200d_2642.png"
                width="28"
            />
            <img
                alt="🕴"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t24/1.5/28/1f574.png"
                width="28"
            />
            <img
                alt="👩‍🦽"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc5/1.5/28/1f469_200d_1f9bd.png"
                width="28"
            />
            <img
                alt="🧑‍🦽"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t96/1.5/28/1f9d1_200d_1f9bd.png"
                width="28"
            />
            <img
                alt="👨‍🦽"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te6/1.5/28/1f468_200d_1f9bd.png"
                width="28"
            />
            <img
                alt="👩‍🦼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t44/1.5/28/1f469_200d_1f9bc.png"
                width="28"
            />
            <img
                alt="🧑‍🦼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t15/1.5/28/1f9d1_200d_1f9bc.png"
                width="28"
            />
            <img
                alt="👨‍🦼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f468_200d_1f9bc.png"
                width="28"
            />
            <img
                alt="🚶‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4a/1.5/28/1f6b6_200d_2640.png"
                width="28"
            />
            <img
                alt="🚶"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1c/1.5/28/1f6b6.png"
                width="28"
            />
            <img
                alt="🚶‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4c/1.5/28/1f6b6_200d_2642.png"
                width="28"
            />
            <img
                alt="👩‍🦯"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f469_200d_1f9af.png"
                width="28"
            />
            <img
                alt="🧑‍🦯"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf9/1.5/28/1f9d1_200d_1f9af.png"
                width="28"
            />
            <img
                alt="👨‍🦯"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t49/1.5/28/1f468_200d_1f9af.png"
                width="28"
            />
            <img
                alt="🧎‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1b/1.5/28/1f9ce_200d_2640.png"
                width="28"
            />
            <img
                alt="🧎"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1.5/28/1f9ce.png"
                width="28"
            />
            <img
                alt="🧎‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1d/1.5/28/1f9ce_200d_2642.png"
                width="28"
            />
            <img
                alt="🏃‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t63/1.5/28/1f3c3_200d_2640.png"
                width="28"
            />
            <img
                alt="🏃"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t75/1.5/28/1f3c3.png"
                width="28"
            />
            <img
                alt="🏃‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t65/1.5/28/1f3c3_200d_2642.png"
                width="28"
            />
            <img
                alt="🧍‍♀️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tda/1.5/28/1f9cd_200d_2640.png"
                width="28"
            />
            <img
                alt="🧍"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tac/1.5/28/1f9cd.png"
                width="28"
            />
            <img
                alt="🧍‍♂️"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tdc/1.5/28/1f9cd_200d_2642.png"
                width="28"
            />
            <img
                alt="👫"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1.5/28/1f46b.png"
                width="28"
            />
            <img
                alt="👭"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t74/1.5/28/1f46d.png"
                width="28"
            />
            <img
                alt="👬"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf3/1.5/28/1f46c.png"
                width="28"
            />
            <img
                alt="👩‍❤️‍👨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tef/1.5/28/1f469_200d_2764_200d_1f468.png"
                width="28"
            />
            <img
                alt="👩‍❤️‍👩"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t70/1.5/28/1f469_200d_2764_200d_1f469.png"
                width="28"
            />
            <img
                alt="👨‍❤️‍👨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td0/1.5/28/1f468_200d_2764_200d_1f468.png"
                width="28"
            />
            <img
                alt="👩‍❤️‍💋‍👨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f469_200d_2764_200d_1f48b_200d_1f468.png"
                width="28"
            />
            <img
                alt="👩‍❤️‍💋‍👩"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t33/1.5/28/1f469_200d_2764_200d_1f48b_200d_1f469.png"
                width="28"
            />
            <img
                alt="👨‍❤️‍💋‍👨"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t31/1.5/28/1f468_200d_2764_200d_1f48b_200d_1f468.png"
                width="28"
            />
            <img
                alt="👨‍👩‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t85/1.5/28/1f468_200d_1f469_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👩‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t6/1.5/28/1f468_200d_1f469_200d_1f467.png"
                width="28"
            />
            <img
                alt="👨‍👩‍👧‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta1/1.5/28/1f468_200d_1f469_200d_1f467_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👩‍👦‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc2/1.5/28/1f468_200d_1f469_200d_1f466_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👩‍👧‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t22/1.5/28/1f468_200d_1f469_200d_1f467_200d_1f467.png"
                width="28"
            />
            <img
                alt="👩‍👩‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t46/1.5/28/1f469_200d_1f469_200d_1f466.png"
                width="28"
            />
            <img
                alt="👩‍👩‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f469_200d_1f469_200d_1f467.png"
                width="28"
            />
            <img
                alt="👩‍👩‍👧‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t40/1.5/28/1f469_200d_1f469_200d_1f467_200d_1f466.png"
                width="28"
            />
            <img
                alt="👩‍👩‍👦‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t61/1.5/28/1f469_200d_1f469_200d_1f466_200d_1f466.png"
                width="28"
            />
            <img
                alt="👩‍👩‍👧‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc1/1.5/28/1f469_200d_1f469_200d_1f467_200d_1f467.png"
                width="28"
            />
            <img
                alt="👨‍👨‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta6/1.5/28/1f468_200d_1f468_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👨‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t27/1.5/28/1f468_200d_1f468_200d_1f467.png"
                width="28"
            />
            <img
                alt="👨‍👨‍👧‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te0/1.5/28/1f468_200d_1f468_200d_1f467_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👨‍👦‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1/1.5/28/1f468_200d_1f468_200d_1f466_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👨‍👧‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t61/1.5/28/1f468_200d_1f468_200d_1f467_200d_1f467.png"
                width="28"
            />
            <img
                alt="👩‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tfe/1.5/28/1f469_200d_1f466.png"
                width="28"
            />
            <img
                alt="👩‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t7f/1.5/28/1f469_200d_1f467.png"
                width="28"
            />
            <img
                alt="👩‍👧‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t88/1.5/28/1f469_200d_1f467_200d_1f466.png"
                width="28"
            />
            <img
                alt="👩‍👦‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta9/1.5/28/1f469_200d_1f466_200d_1f466.png"
                width="28"
            />
            <img
                alt="👩‍👧‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9/1.5/28/1f469_200d_1f467_200d_1f467.png"
                width="28"
            />
            <img
                alt="👨‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t1f/1.5/28/1f468_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta0/1.5/28/1f468_200d_1f467.png"
                width="28"
            />
            <img
                alt="👨‍👧‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc7/1.5/28/1f468_200d_1f467_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👦‍👦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/te8/1.5/28/1f468_200d_1f466_200d_1f466.png"
                width="28"
            />
            <img
                alt="👨‍👧‍👧"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t48/1.5/28/1f468_200d_1f467_200d_1f467.png"
                width="28"
            />
            <img
                alt="🧶"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5b/1.5/28/1f9f6.png"
                width="28"
            />
            <img
                alt="🧵"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tda/1.5/28/1f9f5.png"
                width="28"
            />
            <img
                alt="🧥"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3b/1.5/28/1f9e5.png"
                width="28"
            />
            <img
                alt="🥼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td7/1.5/28/1f97c.png"
                width="28"
            />
            <img
                alt="🦺"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t8a/1.5/28/1f9ba.png"
                width="28"
            />
            <img
                alt="👚"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t52/1.5/28/1f45a.png"
                width="28"
            />
            <img
                alt="👕"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t26/1.5/28/1f455.png"
                width="28"
            />
            <img
                alt="👖"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta7/1.5/28/1f456.png"
                width="28"
            />
            <img
                alt="🩲"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4e/1.5/28/1fa72.png"
                width="28"
            />
            <img
                alt="🩳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcf/1.5/28/1fa73.png"
                width="28"
            />
            <img
                alt="👔"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta5/1.5/28/1f454.png"
                width="28"
            />
            <img
                alt="👗"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t28/1.5/28/1f457.png"
                width="28"
            />
            <img
                alt="👙"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2a/1.5/28/1f459.png"
                width="28"
            />
            <img
                alt="👘"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta9/1.5/28/1f458.png"
                width="28"
            />
            <img
                alt="🥻"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t56/1.5/28/1f97b.png"
                width="28"
            />
            <img
                alt="🩱"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tcd/1.5/28/1fa71.png"
                width="28"
            />
            <img
                alt="🥿"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5a/1.5/28/1f97f.png"
                width="28"
            />
            <img
                alt="👠"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t40/1.5/28/1f460.png"
                width="28"
            />
            <img
                alt="👡"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc1/1.5/28/1f461.png"
                width="28"
            />
            <img
                alt="👢"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t42/1.5/28/1f462.png"
                width="28"
            />
            <img
                alt="👞"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t56/1.5/28/1f45e.png"
                width="28"
            />
            <img
                alt="👟"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td7/1.5/28/1f45f.png"
                width="28"
            />
            <img
                alt="🥾"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/28/1f97e.png"
                width="28"
            />
            <img
                alt="🧦"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tbc/1.5/28/1f9e6.png"
                width="28"
            />
            <img
                alt="🧤"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tba/1.5/28/1f9e4.png"
                width="28"
            />
            <img
                alt="🧣"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t39/1.5/28/1f9e3.png"
                width="28"
            />
            <img
                alt="🎩"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t3d/1.5/28/1f3a9.png"
                width="28"
            />
            <img
                alt="🧢"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb8/1.5/28/1f9e2.png"
                width="28"
            />
            <img
                alt="👒"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/ta3/1.5/28/1f452.png"
                width="28"
            />
            <img
                alt="🎓"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t5f/1.5/28/1f393.png"
                width="28"
            />
            <img
                alt="⛑"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tc0/1.5/28/26d1.png"
                width="28"
            />
            <img
                alt="👑"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t22/1.5/28/1f451.png"
                width="28"
            />
            <img
                alt="💍"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tb2/1.5/28/1f48d.png"
                width="28"
            />
            <img
                alt="👝"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td5/1.5/28/1f45d.png"
                width="28"
            />
            <img
                alt="👛"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/28/1f45b.png"
                width="28"
            />
            <img
                alt="👜"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t54/1.5/28/1f45c.png"
                width="28"
            />
            <img
                alt="💼"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t47/1.5/28/1f4bc.png"
                width="28"
            />
            <img
                alt="🎒"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/tde/1.5/28/1f392.png"
                width="28"
            />
            <img
                alt="🧳"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/td8/1.5/28/1f9f3.png"
                width="28"
            />
            <img
                alt="👓"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t24/1.5/28/1f453.png"
                width="28"
            />
            <img
                alt="🕶"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t26/1.5/28/1f576.png"
                width="28"
            />
            <img
                alt="🥽"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t58/1.5/28/1f97d.png"
                width="28"
            />
            <img
                alt="🌂"
                className="flex-shrink-0 p-1 box-content"
                draggable="false"
                height="28"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t47/1.5/28/1f302.png"
                width="28"
            />
        </div>
    )
}

GEmoji.propTypes = {
    onPickEmoji: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
}

export default GEmoji
