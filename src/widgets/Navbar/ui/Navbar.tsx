import React, {FC} from 'react';
import cls from './Navbar.module.scss';
import {classNames} from 'shared/libs/classNames';
import {AppLink} from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.mainLinks}>main</AppLink>
                <AppLink to={'/about'} className={cls.mainLinks}>about</AppLink>
            </div>
        </div>
    );
};

