import { createContext, useContext, useState, type ReactNode } from "react";
import type { AuthContextType } from "../types/post";


//1. initialize the context
const AuthContext = createContext<AuthContextType |undefined>(undefined);

//2. create the provider component
export function AuthProvider({children} : {children : ReactNode}) {
   const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  //simulate logging in
  const login = () =>{
     setAuthenticated(true);
  }

  //simulate logging out

  const logout = ()=>{
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider  value={ {isAuthenticated, login, logout}}>
    {children}
    </AuthContext.Provider>
  )

}

//create custom hook
export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error("useAuth must be used within an  AuthProvider");
    }
    return context;
}


