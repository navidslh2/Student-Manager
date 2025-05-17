import React, { useState } from "react";

export const AuthContext = React.createContext()
const AuthContextProvider = (props)=>{
    const [authenticated, setAuthenticated] = useState(false)
    const login = ()=>{
        setAuthenticated(true)
    }
    const logout = ()=>{
        setAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={{authenticated, login, logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider