'use client'
import { signIn } from 'next-auth/react'

export default function Login(){
    return(
        <li className='list-none'>
            <button onClick={() => signIn("google")} className='text-sm font-bold py-2 px-6 disabled:bg-slate-600 bg-white rounded-full'>
                Sign in
            </button>
        </li>
    )
}