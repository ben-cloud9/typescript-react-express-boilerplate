import request from 'supertest';
import createServer from './createServer';

const { app } = createServer(3000, 'doesnt-matter');

it('should respond to /api/ping', async () => {
    const res = await request(app).get('/api/ping');
    expect(res.status).toBe(200);
});
