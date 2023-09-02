"use client"

import * as React from 'react';
import Link from "next/link"
import {useAuthContext} from '@/app/context';
import '@/app/globals.css';

export default function Nav(){
    const { user,signOut } = useAuthContext();
    const getlogininfo = ({user}:any) => {
        const email = () => {
            if(!user) return 'email'
            console.log(user.email)
            return user.email
        }
    }
    const logout = () => {
        signOut();
    }
    
    return(
        <>
        <nav className="flex justify-between">
            <ul className="flex">
            <Link href='/'>
                <li className="hover:cursor-pointer hover:text-blue-600">Home No-Auth-Helpers</li>
                </Link>
                <Link href='/landing'>
                <li className="hover:cursor-pointer hover:text-blue-600">Login</li>
                </Link>
                <Link href="/transactions">
                <li className="hover:cursor-pointer hover:text-blue-600">Transactions</li>
                </Link>
                <Link href="/categories">
                <li className="hover:cursor-pointer hover:text-blue-600">Categories</li>
                </Link>
            </ul>
            {user && (
            <div className="login-user">
                <span>{ user?.email}</span>
                <button onClick={logout} className="toggl">SignOut</button>
            </div>)}
            
        </nav>
        </>
    )
}