import Express from 'express';

const app = Express();

app.get('/', function(req, res){
    res.send('Hello James');
});

app.set('port', process.env.port || 5000);

app.listen(app.get('port'), function(){
    console.log('Listening on port ' + app.get('port'));
});
