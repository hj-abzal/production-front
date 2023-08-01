import { FC } from 'react';
import { classNames } from 'shared/libs/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}
export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    const onReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h2>{t('ERROR_BOUNDARY.TITLE')}</h2>
            <Button onClick={onReload}>{t('ERROR_BOUNDARY.RELOAD')}</Button>
        </div>
    );
};
