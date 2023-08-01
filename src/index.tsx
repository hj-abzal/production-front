import { App } from 'app/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18/i18';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
    <BrowserRouter>
        <ThemeProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
