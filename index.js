const http = require('http');
const App = require('./app');
const port = 3004;
const app = new App(port);

const httpServer = http.createServer(app.express);

// listen on provided ports
httpServer.listen(port);

// add error handler
httpServer.on('error', function (err) {
    console.log(err);
});

// start listening on port
httpServer.on('listening', function() {
    console.log('Use port' + port);
});