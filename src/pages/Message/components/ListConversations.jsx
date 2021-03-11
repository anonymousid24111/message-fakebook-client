// import React, { useEffect, useState } from 'react'
// import Conversation from './Conversation'
// import callApiHttp from 'functions/callApiHttp'
// import { Redirect, useParams } from 'react-router-dom'
// import { useAuth } from 'hooks/useAuth'
// import { RECEIVE_MESSAGE } from 'commons/socketEvents'

// const ListConversations = () => {
//     const [listConversations, setListConversations] = useState([])
//     const { id } = useParams()
//     const { user, onSocket } = useAuth()
//     useEffect(() => {
//         const fetchListConversations = async () => {
//             const { data } = await callApiHttp({
//                 method: "GET",
//                 url: "/conversation/"
//             })
//             if (data.code === 1000) {
//                 setListConversations(data.data)
//             } else {
//                 alert("error")
//             }
//         }
//         fetchListConversations()

//     }, [id])

//     return (
//         <div className="list-conversation overflow-auto p-1">
//             {listConversations?.length > 0 ? listConversations?.map((conversation, index) => {
//                 conversation.members = conversation.members.filter(x => x._id !== user)
//                 let tempMember = conversation.members[0]
//                 let conversationName = tempMember.username || tempMember.email
//                 let conversationId = tempMember._id
//                 if (!id) return <Redirect to={`/message/${conversationId}`} key={index} />
//                 return <Conversation conversation={conversation} conversationId={conversationId} conversationName={conversationName} key={index} firstMessage={conversation?.messages.slice(-1)[0]} />
//             }) : <i>You have no conversation</i>
//             }
//         </div>
//     )
// }

// export default ListConversations