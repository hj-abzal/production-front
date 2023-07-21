import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/libs/classNames';
import cls from './Button.module.scss';

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
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...restProps}
        >
            {children}
        </button>
    );
};
