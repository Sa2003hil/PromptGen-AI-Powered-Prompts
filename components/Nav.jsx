'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
    }, [])

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/' className='flex gap-2 flex-center'>
                <Image
                    src='/assets/images/PG.png'
                    alt='Promptopia Logo'
                    width={40}
                    height={40}
                    className='object-contain rounded-md'
                />
                <p className='logo_text'> PromptGen </p>
            </Link>


            {/* Destop Navugation */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt' className='black_btn'>
                            Create Post
                        </Link>
                        <button type='button' onClick={signOut} className='outline_btn'>
                            Sign Out
                        </button>

                        <Link href='/profile'>
                            <Image
                                width={37}
                                height={37}
                                className=' rounded-full'
                                alt='Profile'
                                src='assets/images/logo.svg'
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers
                            ? Object.values(providers).map(provider => (
                                <button
                                    key={provider.name}
                                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                                    className='black_btn'
                                >
                                    Sign in
                                </button>
                            ))
                            : null}
                    </>
                )}
            </div>


            {/* Mobile Navigation */}
            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? (
                    <div className='flex '>
                        <Image
                            width={37}
                            height={37}
                            className=' rounded-full cursor-pointer'
                            alt='Profile'
                            src='assets/images/logo.svg'
                            onClick={() => setToggleDropDown((prev) => !prev)}
                        />
                        {/* toggle in smallerscreens */}
                        {
                            toggleDropDown && (
                                <div className='dropdown'>
                                    <Link
                                        href="/profile"
                                        className='dropdown_link'
                                        onClick={() => setToggleDropDown(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <Link
                                        href="/create-prompt"
                                        className='dropdown_link'
                                        onClick={() => setToggleDropDown(false)}
                                    >
                                        Create Prompt
                                    </Link>

                                    <button
                                        type='button'
                                        className='mt-5 w-full black_btn'
                                        onClick={() => {
                                            setToggleDropDown(false);
                                            signOut();
                                        }}
                                    >
                                        Sign Out
                                    </button>

                                </div>
                            )}
                    </div>
                ) : (
                    <>
                        {providers
                            ? Object.values(providers).map(provider => (
                                <button
                                    key={provider.name}
                                    onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                                    className='black_btn'
                                >
                                    Sign in
                                </button>
                            ))
                            : null}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav
