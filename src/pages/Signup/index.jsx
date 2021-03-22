import callApiHttp from 'functions/callApiHttp'
import React, { useState } from 'react'

function Signup() {
    const signup = async (e) => {
        e.preventDefault()
        const res = await callApiHttp({
            url: '/user',
            data: {
                email,
                password,
            },
            method: 'POST',
        })
        const { data } = res
        if (data.code === 1000) {
            window.location.href = '/login'
        } else {
            setError(`Error: ${data.error}- ${data.description}`)
        }
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
            <form
                onSubmit={signup}
                className="w-96 fb-bg-dark rounded-xl p-7 space-y-3"
            >
                <label htmlFor="email">
                    <div className="font-bold text-lg ">Email:</div>
                    <input
                        id="email"
                        className="fb-bg-dark-2 px-3 py-2 rounded-full outline-none w-full"
                        type="text"
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
                        id="password"
                        className="fb-bg-dark-2 px-3 py-2 rounded-full outline-none w-full"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholde="password"
                    />
                </label>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="fb-bg-main px-3 py-2 rounded-full focus:outline-none"
                    >
                        Sign up
                    </button>
                </div>
            </form>

            {error && <div>Error: {error}</div>}
        </div>
    )
}

export default Signup
