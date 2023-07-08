import React, {Suspense, useContext} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import {Main} from './pages/Main/Main';
import {AboutAsyncPage} from './pages/About/About.async';
import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classNames/classNames';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app' ,{}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>

            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsyncPage/>}/>
                    <Route path={'/'} element={<Main/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};