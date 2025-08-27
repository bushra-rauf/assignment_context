'use client'

import { useUser } from "@/contexts/userContext";
import { userAccounts } from "@/data/accounts";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
    const [nameInput, setNameInput] = useState<string>('')
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [wrongInformation, setWrongInformation] = useState<boolean>(false);
    const { updateName } = useUser();

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNameInput(e.target.value)
        setWrongInformation(false);
    }

    const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPasswordInput(e.target.value)
        setWrongInformation(false);
    }

    const handleSubmit = (e: React.ChangeEvent<EventTarget>) => {
        e.preventDefault();
        const userLoginValidate = userAccounts.filter(item => item.name === nameInput && item.password === passwordInput)

        if (userLoginValidate.length > 0) {
            updateName(nameInput);
            redirect('/')
        } else
            setWrongInformation(true);

    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-950/50 p-10 rounded-2xl shadow-2xl shadow-black backdrop-blur-[3px] ">
            <Image src="/kitchenLogo.webp" width={200} height={200} alt='kitchenLogo' />
            {wrongInformation && <p className="text-red-500 font-bold">Wrong password or name</p>}
            <form className="flex flex-col text-white mt-5">
                <label htmlFor="username">Username</label>
                <input className="bg-white text-black text-center" type="text" id="username" value={nameInput} onChange={e => handleNameInput(e)} />
                <label htmlFor="password">Password</label>
                <input id="password" className="bg-white text-black text-center" type="password" value={passwordInput} onChange={e => handlePasswordInput(e)} />
                <button disabled={nameInput === '' || passwordInput === ''} onClick={e => handleSubmit(e)} className="disabled:text-white/50 disabled:bg-gray-600/50 disabled:cursor-not-allowed cursor-pointer bg-gray-500 text-white ">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;