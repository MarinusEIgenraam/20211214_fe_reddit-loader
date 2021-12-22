////////////////////
//// Build
import React, { createContext, useState, useEffect } from "react";

////////////////////
//// Environmental

////////////////////
//// External

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {

    const [ authenticated, setAuthenticated ] = useState(false)

    function toggleAuthenticated() {
        setAuthenticated(!authenticated);
    }

    return (
        <AuthContext.Provider value={ { authenticated, toggleAuthenticated } }>
            { children }
        </AuthContext.Provider>
    )
}

/** Created by ownwindows on 22-12-21 **/
