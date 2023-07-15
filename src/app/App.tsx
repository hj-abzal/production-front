import React  from 'react';
import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/libs/classNames/classNames';
import {Navbar} from 'widgets/Navbar';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <ThemeSwitcher/>
        </div>
    );
};