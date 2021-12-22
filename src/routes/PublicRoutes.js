///////////////////////
//// Build
import { Route, Redirect } from "react-router-dom";


export default function PublicRoutes ({ children, isAuthenticated, ...rest }) {

    return (
        <Route
            { ...rest }
            render={
                ({ location }) => (
                    !isAuthenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={ {
                                pathname: '/home',
                                state: { from: location }
                            } }
                        />
                    )
                )
            }
        />
    )
};