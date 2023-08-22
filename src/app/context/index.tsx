"use client"

import {createContext, useContext ,useEffect,useState} from "react";
import supabase from '@/app/utils/supabase';

const AuthContext = createContext({});
export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(false);
    const onAuthStateChange = async () => {
        try {
          const {
            data: { user },
          }= await supabase.auth.getUser();
          console.log(user)
        } catch (error) {
          console.log(error)
        } finally {
    
        }
        useEffect( () => {
            onAuthStateChange();
          },[]);

          return (
          <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
          )
      };
}