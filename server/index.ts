import createServer from './createServer';
import path from 'path';

const port = Number(process.env.PORT) || 4000;

const reactBuildPath =  path.join(__dirname, '..', 'build');

const server = createServer(port, reactBuildPath);

server.start();
