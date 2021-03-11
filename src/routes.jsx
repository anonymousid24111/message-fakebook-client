import Landing from 'pages/Landing'
import Home from 'pages/Home'
import Profile from 'pages/Profile'
import Message from 'pages/Message'
import Login from 'pages/Login'
import Signup from 'pages/Signup'
import NotFound from 'pages/NotFound'
import Friend from 'pages/Friend'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound,
    },
    // {
    //     path: '/message/:id',
    //     name: 'Message',
    //     component: Message
    // },
    {
        path: '/message',
        name: 'Message',
        component: Message,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
    },
    {
        path: '/friend',
        name: 'Friend',
        component: Friend,
    },
    {
        path: '/landing',
        name: 'Landing',
        component: Landing,
    },
]

export default routes
