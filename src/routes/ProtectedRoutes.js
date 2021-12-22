///////////////////////
//// Build
import { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';

///////////////////////
//// Environmental
import routes from "./Routes";
import Loader from "../components/shared/Loader/Loader";


export default function ProtectedRoutes() {
    return(
        <Switch>
            <Suspense
                fallback={<Loader/>}
                >
                {routes.map(({component: Component, path ,exact})=>(
                    <Route
                    path={path}
                    key={path}
                    exact={exact}
                    >
                        <Component />
                    </Route>
                ))}
            </Suspense>
        </Switch>
    )
};