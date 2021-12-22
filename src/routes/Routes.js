///////////////////////
//// Build
import { lazy } from "react";


const routes = [
    {
        path: "home",
        component: lazy(() => import('components/pages/Home/Home.js')),
        exact: true
    },
    {
        path: "subredits/:id",
        component: lazy(() => import('components/pages/Subreddit/Subreddit.js')),
        exact: true
    }
];

export default routes;