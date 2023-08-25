"use client"

import * as React from 'react';
import {useState} from 'react';
import {supabase} from '@/app/utils/supabase';
import Image from 'next/image';
import Nav from './Nav';
import '../globals.css';


export default function OldLanding(){
    const [email,setEmail] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);

    const login = async () => {
        if(!email) alert('Please enter a valid email')
        try {
            setLoading(true);
            let { data, error } = await supabase.auth.signInWithOtp({
              email
            })
        } catch(error) {
            console.log(error);
        } finally {
          console.log(email)
            setLoading(false)
        }
    }
    return(
      <>
      <Nav />
        <div className="flex flex-col items-center">
            <h1 className=" text-blue-600 text-6xl mt-4">Another numbers app!</h1>
            <div className="container  flex flex-col items-center text-center">
            <form className="shadow-lg rounded px-8 pt-6 pb-8 mt-5 mb-4">
    <div className="mb-4 mt-5 flex flex-col gap-3">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Landing Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="example@example.com" onChange={e => setEmail(e.target.value)} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={login}>
        Sign Up OTP
      </button>
    </div>
  </form>
        
      </div>
        </div>
        </>

    )

}