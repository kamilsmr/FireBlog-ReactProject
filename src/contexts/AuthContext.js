import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
   const {currentUser, setCurrentUser} =useState()
   
   
    return (

         <AuthContext.Provider value={{currentUser}}>
             {props.children}
         </AuthContext.Provider>   
    )   

}

export default AuthContextProvider;