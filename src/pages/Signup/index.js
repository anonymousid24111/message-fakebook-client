import callApiHttp from "functions/callApiHttp";
import React, { useState } from "react";

function Signup() {

    let signup = async (e) => {
        e.preventDefault()
        const res = await callApiHttp({
            url: '/user',
            data: {
                email,
                password
            },
            method: 'POST'
        })
        const { data } = res
        if (data.code === 1000) {
            window.location.href = '/login'
        }
        else {
            setError(`Error: ${data.error}- ${data.description}`)
        }
    };

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black" >
            <form onSubmit={signup} className="w-96 fb-bg-dark rounded-xl p-7 space-y-3">
                <div><label className="font-bold text-lg " htmlFor="email">Email:</label></div>
                <div >
                    <input
                        className="fb-bg-dark-2 px-3 py-2 rounded-full outline-none w-full" type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
                </div>
                <div><label className="font-bold text-lg " htmlFor="password">Password:</label></div>
                <div>
                    <input
                        className="fb-bg-dark-2 px-3 py-2 rounded-full outline-none w-full" type='password' value={password} onChange={e => setPassword(e.target.value)} placeholde="password" />
                </div>
                <div className="flex justify-end" >
                    <button className="fb-bg-main px-3 py-2 rounded-full">Sign up</button>
                </div>

            </form>

            { error && <div>Error: {error}</div>}
        </ div >
    );
}

export default Signup