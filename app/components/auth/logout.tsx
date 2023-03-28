'use client'
import { signOut } from 'next-auth/react'

export default function Logout(){
    return(
        <li className='list-none'>
            <button onClick={() => signOut()} className='text-sm font-bold py-2 px-6 disabled:opacity-25'>
                Sign out
            </button>
        </li>
    )
}