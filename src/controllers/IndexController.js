import React from 'react';
import { renderToString } from 'react-dom/server';
import Template from '../../client/views/default';
import App from '../../client/index';
import { Router, Route, BrowserHistory, match } from 'react-router-dom';

export function index(req, res) {
    const appString = renderToString(<App />);

    res.send(Template({
    body: appString,
    title: 'Hello James from the server'
  }));
}
