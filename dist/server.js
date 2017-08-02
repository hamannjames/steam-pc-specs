'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
    res.send('Hello James');
});

app.set('port', process.env.port || 5000);

app.listen(app.get('port'), function () {
    console.log('Listening on port ' + app.get('port'));
});