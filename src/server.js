import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Template from '../client/views/default';
import App from '../client/index';
import router from './routes';

const app = Express();

app.use(Express.static('dist'));

app.use('/', router);

app.set('port', process.env.port || 5000);

app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});
