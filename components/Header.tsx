"use client"

import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

const Header = () => {
    return (
        <div className='p-4 flex justify-between items-center'>
            <Link href="/" className='flex items-center'>
                <Shield className='w-6 h-6 mr-2 text-blue-500' />
                <h1 className='text-xl font-semibold'>Expensio</h1>
            </Link>

            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <Button>Login</Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </div>
    )
}

export default Header