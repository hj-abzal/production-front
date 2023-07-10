import React  from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/libs/classNames/classNames';

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle</button>

            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>

        </div>
    );
};