"use client"

import * as React from 'react';
import {usePathname, useRouter} from 'next/navigation';

export default function Header(){
    const pathname = usePathname();
    const router = useRouter();
    return(
        <>
        <div className="grid grid-flow-row">
            
        </div>
        </>
    )
}