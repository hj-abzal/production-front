import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs/classNames';
import cls from './NotFound.module.scss';

export const NotFound = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.NotFound)}>
            {t('PAGE_NOT_FOUND')}
        </div>
    );
};
