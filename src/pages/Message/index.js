import React from 'react'
// absolute
import 'App.css';
//relative
import Main from './Main';
import LeftSection from './LeftSection';
import { Route, Switch } from 'react-router-dom';

function MessageNotId() {
  return (<div className="flex justify-center items-center w-full">
    <div className="text-3xl">Select a thread or start a new conversation </div>
  </div>)
}

function Message() {
  return (
    <div className="w-screen h-screen flex">
      <LeftSection />
      <Switch>
        <Route path="/message/t/" exact component={MessageNotId} />
        <Route path="/message/t/:id" component={Main} />
      </Switch>
    </div >
  );
}

export default Message;
