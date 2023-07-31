import { lazy } from 'react';

export const AboutAsyncPage = lazy(() => new Promise((res) => {
    setTimeout(() => {
        // @ts-ignore
        res(import('./About'));
    }, 2000);
}));
