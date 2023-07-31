import { FC } from 'react';
import { classNames } from 'shared/libs/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string
}
export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames(cls.Loader, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
