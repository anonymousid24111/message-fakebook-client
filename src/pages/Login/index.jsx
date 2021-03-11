import callApiHttp from 'functions/callApiHttp'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Login() {
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
        <div className="w-screen h-screen flex items-center justify-center bg-black">
            <form
                onSubmit={login}
                className="w-96 fb-bg-dark rounded-xl p-7 space-y-3"
            >
                <label htmlFor="email">
                    <div className="font-bold text-lg ">Email:</div>
                    <input
                        className="fb-bg-dark-2 px-3 py-2 rounded-full outline-none w-full"
                        id="email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                    />
                </label>
                <label htmlFor="password">
                    <div className="font-bold text-lg " htmlFor="password">
                        Password:
                    </div>
                    <input
                        type="password"
                        className="fb-bg-dark-2 px-3 py-2 rounded-full outline-none w-full"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholde="password"
                    />
                </label>
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="fb-bg-main px-3 py-2 rounded-full"
                    >
                        Log in
                    </button>
                </div>
            </form>

            {error && <div>Error: {error}</div>}
        </div>
    )
}
export default Login