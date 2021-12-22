///////////////////////
//// Build
import { Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";


export default function PrivateRoutes({ children, ...rest }) {

    const { authenticated } = useContext(AuthContext);

    useEffect(() => {
        console.log('i did it')
    });

    return authenticated ? children : <Navigate to='/'/>;
};