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
        <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
            <form
                onSubmit={signup}
                className="w-96 text-black bg-gray-100 rounded-lg p-7 space-y-3"
                style={{ width: '400px' }}
            >
                <div className="flex font-semibold text-3xl"> Đăng ký</div>
                <div>Nhanh chóng và dễ dàng.</div>
                <hr />
                <div className="flex justify-center space-x-2">
                    <input
                        className="inline min-w-0 p-2 rounded border boder-black-300"
                        placeholder="First name"
                    />
                    <input
                        className="inline min-w-0 p-2 rounded border boder-black-300"
                        placeholder="Last name"
                    />
                </div>
                <input
                    className="p-2 w-full rounded border boder-black-300"
                    placeholder="Email address or phone number"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="p-2 w-full rounded border boder-black-300"
                    placeholder="New password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* <label htmlFor="email">
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
                </label> */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className=" fb-bg-green text-white px-14 py-2 text-xl rounded focus:outline-none "
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
