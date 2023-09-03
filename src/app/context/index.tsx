"use client"

import {createContext, useContext ,useEffect,useState,useMemo} from "react";
import { User } from '@supabase/supabase-js';
import Nav from '@/app/components/Nav';
import supabase from '@/app/utils/supabase';
import Header from '@/app/components/Header';
import Landing from '@/app/landing/page';


  interface AuthContextType {
    user?: {}|false;
    signOut: () => void;
  }
const AuthContext = createContext({});

export const AuthContextProvider = ({children}:{children:any}) => {
  const [user,setUser] = useState<User | null>(null);
  const getUserObj = async () => {
      try {
          const { data: { user } } = await supabase.auth.getUser()
      } catch(error) {
          console.log(error);
      } finally {
      }
}
    const onAuthStateChange = async () => {
        try {
          const {data: {user}} = await supabase.auth.getUser();

       if (user) {
            setUser(user);
            console.log(user)
          }
        } catch (error) {
          console.log(error)
        } finally {
          
    }
};
useEffect( () => {
            onAuthStateChange();
            getUserObj();
          },[]);
const value = useMemo( () => {
            return {
                user,
                signOut: () => supabase.auth.signOut(),
            };
          },[user]);
      return (
            <AuthContext.Provider value={value}>
              <Nav />
              <Header user={user} />
                {!user ? <Landing /> : children }
            </AuthContext.Provider>
          );
}

export const useAuthContext = () => {
    const {user, signOut} = useContext(AuthContext)as AuthContextType;
    return {user,signOut};
}
