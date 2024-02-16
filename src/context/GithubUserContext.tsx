import { createContext, useState } from "react";
import React from "react";
import { UserContextType } from "../types/types";



export const GithubUserContext = createContext<UserContextType>({
    user: 'github',
    updateUser: () => {}
})

export default function GithubUserContextProvider({ children }: React.PropsWithChildren) {
    const [user,setUser] = useState('github')    

    function updateUser(newUser: string){
        setUser(newUser)
    }

    return <GithubUserContext.Provider value={{user,updateUser}}>
        {children}
    </GithubUserContext.Provider>

}

