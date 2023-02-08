import http from 'http';
import app from '../app.js';

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }

  if (port < 0) {
    logger.error('port must be greater than or equal zero.');
    process.exit(1);
  }

  return port;
};


const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);


const errorHandler = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port: ${port}`;

  switch (error.code) {
    case 'EACCES':
      console.log(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.log(`${bind} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.on('error', errorHandler);
// make the server listen to requests
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : port;
  console.log(`Server started successfully on port: ${bind}`);
  console.log(`App: http://localhost:${bind}`);
  console.log(`Swagger: http://localhost:${bind}/api-docs`);
});

server.listen(port);
