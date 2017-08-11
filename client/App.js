import React from 'react';
import { render } from 'react-dom';
import App from './index';
import { BrowserRouter, Link, Route } from 'react-router-dom';

render(
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById('root')
);
