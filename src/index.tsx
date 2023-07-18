import {App} from 'app/App';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import 'shared/config/i18/i18';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);