import React, { FC } from 'react';
import { classNames } from 'shared/libs/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" className={cls.mainLinks}>main</AppLink>
            <AppLink to="about" className={cls.mainLinks}>about</AppLink>
        </div>
    </div>
);
