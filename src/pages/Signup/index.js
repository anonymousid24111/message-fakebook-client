import callApiHttp from "functions/callApiHttp";
import React, { useState } from "react";

function Signup() {

    let signup = async () => {
        const res = await callApiHttp({
            url: '/user',
            data: {
                email,
                password
            },
            method: 'POST'
        })
        const {data}=res
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
        <div>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholde="password" />
            <button onClick={signup}>Sign Up</button>
            {error&&<div>{error}</div>}
        </div >
    );
}

export default Signup