import React, {Suspense, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./components/pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./components/pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";


const App = () => {
    const {theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <button type="button" onClick={toggleTheme}>TOGGLE THEME</button>
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
