"use client"
import * as React from 'react';
import {useState} from 'react';
import UserHeader from '@/app/components/UserHeader';
import './globals.css'

export default function Home() {
  return (
    <div className="flex justify-center flex-col text-center">
      <h1 className="text-blue-600 text-6xl mt-4">Your Numbers App!</h1>
      <div className="flex flex-col justify-center text-center">
        <UserHeader />
      </div>
      
    </div>
  )
}
