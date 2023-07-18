import React, {FC, useState} from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from 'shared/libs/classNames';
import {Button} from 'shared/ui/Button/ui/Button';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string
}
export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(prev => !prev);
    }
    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={toggleSidebar}>toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.langSwitcher}/>
            </div>
        </div>
    );
};

