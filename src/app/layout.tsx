

import React,{useState,useEffect} from 'react';
import Nav from '@/app/components/Nav';
import Header from '@/app/components/Header';
import Categories from '@/app/components/Categories';
import GetUserObj from '@/app/components/GetUserObj';
import { AuthContextProvider,useAuthContext } from "./context";
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body>
      
        <AuthContextProvider>
            <Nav />
            <p>USER P:</p>
            <Categories />
        </AuthContextProvider>
      </body>
    </html>
  )
}
