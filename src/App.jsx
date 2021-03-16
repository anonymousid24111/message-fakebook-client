import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import HomePage from 'pages/Home'
import Message from 'pages/Message'
import Profile from 'pages/Profile'
import NotFound from 'pages/NotFound'
import MessageRedirect from 'pages/MessageRedirect'
import './App.css'
import Landing from 'pages/Landing'
import Friend from 'pages/Friend'
import { ProvideAuth } from 'hooks/useAuth'

export default function App() {
    return (
        <ProvideAuth>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/message" exact component={MessageRedirect} />
                    <Route path="/message/t/" component={Message} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/friend" component={Friend} />
                    <Route path="/landing" component={Landing} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </ProvideAuth>
    )
}
