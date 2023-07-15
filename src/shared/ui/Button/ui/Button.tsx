import {ButtonHTMLAttributes, FC} from 'react';
import cls from './Button.module.scss';
import {classNames} from 'shared/libs/classNames';

export enum ThemeButton {
    CLEAR= 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...restProps
    } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...restProps}
        >
            {children}
        </button>
    );
};

