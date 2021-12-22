///////////////////////
//// Build
import { Route, Redirect } from "react-router-dom";


export default function PrivateRoutes({ children, isAuthenticated, ...rest }) {

    return (
        <Route
            { ...rest }
            render={
                ({ location }) => (
                    isAuthenticated
                        ? (
                            children
                        ) : (
                            <Redirect
                                to={ {
                                    pathname: '/login',
                                    state: { from: location }
                                } }
                            />
                        )
                )
            }
        />
    );
};