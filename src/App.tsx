import React, {Suspense} from 'react';
import Counter from "./components/Counter";
import './index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./components/pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./components/pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>MAIN PAGE</Link>
            <Link to={'/about'}>ABOUT PAGE</Link>
            <Suspense fallback={'Loading the page...'}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
