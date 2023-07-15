import React  from 'react';
import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/libs/classNames/classNames';
import {Navbar} from 'widgets/Navbar';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>toggle</button>
        </div>
    );
};