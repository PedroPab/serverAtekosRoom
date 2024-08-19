import request from 'supertest';
import express from 'express';
import router from '../../src/routes/index.js';

describe('Routes', () => {
  let app;
  const version = '/api/v1';
  beforeEach(() => {
    app = express();
    router(app);
  });

  it('should respond to GET method on version/helloWord', async () => {
    const res = await request(app).get(`${version}/`);
    expect(res.statusCode).toEqual(200);
  });

  it('should respond to GET method on version/room', async () => {
    const res = await request(app).get(`${version}/rooms`);
    expect(res.statusCode).toEqual(200);
  });

  it('should respond to GET method on version/img', async () => {
    const res = await request(app).get(`${version}/imgsAtekos/Hello`);
    expect(res.statusCode).toEqual(200);
  });

  it('should respond to GET method on /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});