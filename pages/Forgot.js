import React from 'react'
import { HiLockClosed } from 'react-icons/hi';
import Link from 'next/link';
const Forgot = () => {
    return (
        <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="/logo.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Forgot Password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or{' '}
                        <Link href="/Login" className="text-decoration-none font-medium text-pink-600 hover:text-pink-500">
                            Login in your account
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="space-y-4 rounded-md">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                                placeholder="Email address"
                            />
                        </div>
                    </div>

                    

                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-md font-semibold text-white hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                        >
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <HiLockClosed className="h-5 w-5 text-pink-500 group-hover:text-pink-400" aria-hidden="true" />
                            </span>
                             Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Forgot
