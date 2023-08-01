import React, { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/libs/classNames';
import { Button } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    useEffect(() => {
        if (collapsed) {
            throw new Error();
        }
    }, [collapsed]);
    return (
        <div className={
            classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
        }
        >
            <Button onClick={toggleSidebar}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langSwitcher} />
            </div>
        </div>
    );
};
