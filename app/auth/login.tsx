'use client'
import { signIn } from 'next-auth/react'

export default function Login(){
    return(
        <li className='list-none'>
            <button onClick={() => signIn("google")} className='text-sm py-2 px-6 disabled:opacity-25'>
                Sign in
            </button>
        </li>
    )
}