import callApiHttp from 'functions/callApiHttp'
import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Login = () => {
    const location = useLocation()

    const { from } = location.state || { from: { pathname: '/' } }
    const login = async (e) => {
        e.preventDefault()
        try {
            const res = await callApiHttp({
                method: 'POST',
                url: '/token/login',
                data: {
                    email,
                    password,
                },
            })
            const { data } = res
            if (data.code === 1000) {
                localStorage.setItem('user_id', data?.user_id)
                localStorage.setItem('token', data?.token)
                window.location.href = from.pathname
            } else {
                setError(`${data?.message}- ${data?.description}`)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    return (
        <div className="w-screen h-screen flex md:flex-row flex-col bg-gray-200 text-black">
            <div className="md:flex-1 box-content flex flex-col justify-center pl-20 space-y-5">
                <span className="text-blue-500 font-bold text-5xl">
                    Fakebook
                </span>
                <span className="text-black font-semibold text-xl">
                    Fakebook helps you connect and share with the people in your
                    life.
                </span>
            </div>
            <div className="flex-1  flex items-center justify-center p-10">
                <form
                    onSubmit={login}
                    className="bg-gray-100 rounded-md space-y-4 w-min p-4"
                >
                    <input
                        className="p-4 rounded-md outline-none w-96 border border-gray-300"
                        id="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address or phone number"
                    />
                    <input
                        type="password"
                        className="p-4 rounded-md outline-none w-96 border border-gray-300"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        className="fb-bg-bt focus:outline-none p-3 text-white text-2xl font-semibold rounded-md w-96"
                    >
                        Log in
                    </button>
                    <hr />
                    <div className="text-blue-500 text-sm text-center">
                        <Link to="/forgotten_password">
                            Forgotten password?
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <NavLink
                            to="/signup"
                            className="fb-bg-green text-white p-3 rounded-md text-xl font-semiblod"
                        >
                            Create New Account
                        </NavLink>
                    </div>
                </form>
            </div>
            {error && <div>Error: {error}</div>}
        </div>
    )
}
export default Login
