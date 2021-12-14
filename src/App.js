///////////////////////
//// Build
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

///////////////////////
//// Environmental
import './App.scss'
import Home from "./components/pages/Home/Home";
import Subreddit from "./components/pages/Subreddit/Subreddit";
import Navigation from "./components/layout/Navigation/Navigation";


function App() {
    return (
        <BrowserRouter>
            <Navigation/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:id" element={<Subreddit/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
