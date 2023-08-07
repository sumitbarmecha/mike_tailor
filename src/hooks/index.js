import { createContext, useContext,useState } from "react";
export const AuthContext = createContext(null)
export const AuthProvider = ({childern})=>{
    const [token, setToken] = useState(null)
    return(
        <AuthContext.Provider value={{token,setToken}}>{childern}</AuthContext.Provider>
    )
}
export const useAuth =()=> useContext(AuthContext)