///////////////////////
//// Build
import { lazy, Suspense, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

///////////////////////
//// Environmental
import './App.scss'
import Home from "./components/pages/Home/Home";
import Navigation from "./components/layout/Navigation/Navigation";
import Loader from "./components/shared/Loader/Loader";
import PrivateRoutes from "./routes/PrivateRoutes";
import Subreddit from "./components/pages/Subreddit/Subreddit";
import { AuthContext } from "./context/AuthProvider";


function App() {

    const { authenticated } = useContext(AuthContext)

    return (
        <>


            <Suspense fallback={ <Loader/> }>
                <Navigation/>
                <Routes>
                    <Route path='/' element={ <Home/> }/>

                    <Route path='/subreddit/:id'
                           element={
                               <PrivateRoutes>
                                   <Subreddit />
                               </PrivateRoutes>
                           }
                    />
                </Routes>


            </Suspense>

        </>
    );
}

export default App;
