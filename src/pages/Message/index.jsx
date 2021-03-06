import React from 'react'
// absolute
import 'App.css'
// relative
import { Route, Switch } from 'react-router-dom'
import Main from './Main'
import LeftSection from './LeftSection'

function MessageNotId() {
    return (
        <div className="flex justify-center items-center flex-grow">
            <div className="text-3xl">
                Select a thread or start a new conversation
            </div>
        </div>
    )
}

function Message() {
    return (
        <div className="w-full h-full flex">
            <LeftSection />
            <Switch>
                <Route path="/message/t/" exact component={MessageNotId} />
                <Route path="/message/t/:id" component={Main} />
            </Switch>
        </div>
    )
}

export default Message
