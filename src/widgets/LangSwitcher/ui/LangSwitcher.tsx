import {FC} from 'react';
import cls from './LangSwitcher.module.scss';
import {classNames} from 'shared/libs/classNames';
import {Button, ThemeButton} from 'shared/ui/Button/ui/Button';
import {useTranslation} from 'react-i18next';

interface LangSwitcherProps {
    className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation();

    const toggleLng = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLng}
            theme={ThemeButton.CLEAR}
        >
            {i18n.language}
        </Button>
    );
};
