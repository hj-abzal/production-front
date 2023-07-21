import { FC } from 'react';
import { classNames } from 'shared/libs/classNames';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...restProps
    } = props;
    return (
        <Link className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...restProps}>
            {children}
        </Link>
    );
};
