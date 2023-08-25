"use client"

import * as React from 'react';
import {usePathname, useRouter} from 'next/navigation';

export default function Header({user}: {user:any}) {
    const pathname = usePathname();
    const router = useRouter();
    const email = () => {
        if(!email) return 'A'
        return user.email
    }
    const getFirstLetter = () => {
        if(!user) return 'A'
        return user.email 
    }
    return(
        <>
        <div className="flex flex-row justify-end">
            <p className="flex flex-col font-semibold m-5">{user.email}</p>
            <p className="circle capitalize">{getFirstLetter()}</p>
        </div>
        </>
    )
}