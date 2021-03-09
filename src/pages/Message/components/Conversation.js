// import React from 'react'
// import logo from 'assets/images/avatar.jpg'
// import { NavLink } from 'react-router-dom'
// import {getTimeToNow} from 'functions/formatTime'

// const Conversation = ({ conversation = {}, conversationName = "", firstMessage = {}, conversationId = "" }) => {

//     return (
//         <NavLink activeClassName="bg-active" className="hover:bg-gray-600" to={`/message/${conversationId}`}>
//             <div className="flex items-center no-underline p-3 items-center rounded-xl" style={{ backgroundColor: "inherit" }}>
//                 <div className="flex-none w-16 h-16 relative" >
//                     <img src={conversation?.avatar || logo} alt="avatar-friend" className="rounded-full" />
//                     {conversation?.status || <span className="absolute bottom-0 right-0 bg-green-500 rounded-full w-4 h-4 border-4 border-current"></span>}
//                 </div>
//                 <div className="conversation-block-content">
//                     <span className="conversation-block-content__headline">{conversationName || 'null'}</span>
//                     <div className="conversation-block-content__body">
//                         <div className="conversation-block-content__message">{firstMessage?.content || <i>You have no message</i>}</div>
//                         <span>-</span>
//                         <span>{getTimeToNow(firstMessage?.created)} </span>
//                     </div>
//                 </div>
//                 <span className="conversation-block__icon"><img className="contain" src={logo} alt="icon" /> </span>
//             </div>
//         </NavLink>
//     )
// }

// export default Conversation
