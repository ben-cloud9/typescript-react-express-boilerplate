import express from 'express';
import bodyParser from 'body-parser';

const createServer = (port: number, reactBuildPath: string) => {
    const app = express();
    app.use(bodyParser.json());

    app.use(express.static(reactBuildPath));

    app.get('/api/ping', (req, res) => {
        res.send('pong');
    });


    // for any other routes send to react front-end
    app.get('*', (_req: Express.Request, res: express.Response) => {
        res.sendFile(`${reactBuildPath}/index.html`);
    });

    const start = () => {
        app.listen(port, () => {
            console.log(`server listening on port ${port}`);
        });
    }

    return {
        app,
        start
    }
}

export default createServer;