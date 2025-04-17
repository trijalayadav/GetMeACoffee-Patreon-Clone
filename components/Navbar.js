"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="bg-black text-white flex justify-between items-center px-4 h-14 py-2">
            <Link
                href="/"
                className="logo font-bold flex flex-row items-center gap-3"
            >
                <img className="mx-auto" width={33} src="/coffee-gif.gif" alt="" />
                <span>Get me a coffee</span>
            </Link>

            <div className="relative" ref={dropdownRef}>
                {session ? (
                    <>
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            id="dropdownDefaultButton"
                            className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                            type="button"
                        >
                            Welcome! {session.user.email}
                            <svg
                                className="w-2.5 h-2.5 ms-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        <div
                            className={`z-10 absolute left-[108px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 ${showDropdown ? "" : "hidden"
                                }`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                    <Link
                                        href="/dashboard"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/Yourpage"
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Your Page
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => signOut()}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        Sign out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <Link href="/login">
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
