import React from 'react';
import {useTranslation} from 'react-i18next';

export const Main = () => {
    const {t} = useTranslation('main')
    return (
        <div>
            {t('TITLE')}
        </div>
    );
};

