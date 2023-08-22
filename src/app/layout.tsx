"use client"

import './globals.css'
import supabase from './utils/supabase';
import MetadataInfo from './metadata';
import React, {useState,useEffect} from "react";
import Header from '@/app/components/Header';
import Landing from '@/app/components/Landing';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  //const [isLoggedIn,setIsLoggedIn] = useState(false);
  
  return (
    <>
    <html lang="en">
      
      
      <body><Header />
      {/*{!isLoggedIn ? <Landing /> : children}*/}
      <Landing />
      </body>
      
      
    </html>
    </>
  )
}
