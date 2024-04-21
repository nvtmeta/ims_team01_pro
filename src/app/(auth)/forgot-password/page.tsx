'use client';

import React from 'react'

const ForgotPassPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center text-gray-600 bg-gray-50">
            <div className="relative">

                <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
                    <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.6) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' stroke-width='1' stroke='none' fill='currentColor' /></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' /></svg>
                </div>
                <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
                    <svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='b' patternUnits='userSpaceOnUse' width='40' height='40' patternTransform='scale(0.5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='none' /><path d='M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5' stroke-width='1' stroke='none' fill='currentColor' /></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(#b)' /></svg>
                </div>
                <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
                    <div className="flex-auto p-6">
                        <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                            <a href="#" className="flex cursor-pointer items-center gap-2 bg-gradient-to-r from-sky-400 to-blue-500  bg-clip-text text-transparent no-underline">
                                <span className="flex-shrink-0 text-3xl font-black  tracking-tight opacity-100">FORGOT PASSWORD</span>
                            </a>
                        </div>
                        <h4 className="mb-2 font-medium text-center  text-gray-700 xl:text-xl">Welcome to Channel của tụi Tui:))</h4>
                        <p className="mb-6 text-center text-gray-500">Please enter your email and we'll send you a link to get back your account</p>

                        <form id="" className="mb-4" action="#" method="POST">
                            <div className="mb-4">
                                <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                                    Email </label>
                                <input type="text" className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow" id="email" name="email-username" placeholder="Enter your email" />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button className="grid  cursor-pointer select-none rounded-md border 
                                    bg-gradient-to-r from-sky-400 to-blue-500 bg-indigo-500 py-2 px-5 
                                    text-center align-middle text-sm text-white shadow font-bold
                                    hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600
                                 focus:bg-indigo-600 focus:text-white focus:shadow-none">
                                    Send
                                </button>
                                <button className="grid  cursor-pointer select-none rounded-md 
                                         py-2 px-5 
                                    text-center align-middle text-sm text-black hover:bg-slate-100   font-bold
                                      focus:shadow-none">Cancel</button>
                            </div>


                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassPage
