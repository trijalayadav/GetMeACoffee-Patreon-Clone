"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession()
    if (session) {
        return <>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return (
        <nav className='bg-black text-white flex justify-between items-center px-4 h-14 py-2'>
            <div className='logo font-bold flex flex-row items-center gap-3'>
                <img className="mx-auto" width={33} src="/coffee-gif.gif" alt="" />
                <span> Get me a coffee</span>
            </div>
            {/* <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>Contact</li>
                <li>About Us</li>
                <li>Sign Up</li>
                <li>Log In</li>
            </ul> */}
            <div>
                <Link href={"/login"}>
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
