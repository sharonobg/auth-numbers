"use client"

import * as React from 'react';
export default function UserHeader() {
    return(
        <div className="flex justify-end mt-5 p-8">
            <div className="flex align-middle">User Page</div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit Profile</button>
        </div>
    )

}
