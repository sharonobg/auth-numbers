"use client"

import {createContext, useContext ,useEffect,useState,useMemo} from "react";
import supabase from '@/app/utils/supabase';
import Header from '@/app/components/Header';
import Landing from '@/app/components/Landing';
export default function UserIndex(){
    <h1>User page functions</h1>
}
{/*const AuthContext = createContext({});
export const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState(false);
    const onAuthStateChange = async () => {
        try {
          const {
            data: { user },
          }= await supabase.auth.getUser();
          if (user) {
            setUser(user);
          }
        } catch (error) {
          console.log(error)
        } finally {
    
        }
        useEffect( () => {
            onAuthStateChange();
          },[]);
          const value = useMemo( () => {
            return {
                user,
                signOut: () => supabase.auth.signOut(),
            };
          },[user]);
          return (
            <AuthContext.Provider value={value}>
                <Header />
                {user ? children : <Landing />}
            </AuthContext.Provider>
          );
      
}
export const useAuthContect = () => {
    const {user, signOut} = useContext(AuthContext);
    return {user,signOut};
}*/}