import Boom from '@hapi/boom';
import Logs from '../../../src/utils/logColor/index.js';
import { errorBoomHandler, errorHandler } from '../../../src/middlewares/errorHandler/index.js';

// jest.mock('@hapi/boom');
jest.mock('../../../src/utils/logColor/index.js');

describe('errorBoomHandler', () => {
  it('should log error and respond with Boom error', () => {
    const err = Boom.badRequest('Bad Request');
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    errorBoomHandler(err, req, res, next);

    expect(Logs.logInfo).toHaveBeenCalledWith(`[errorBoomHandler]`);
    expect(Logs.logError).toHaveBeenCalledWith(err.output.payload);
    expect(res.status).toHaveBeenCalledWith(err.output.statusCode);
    expect(res.json).toHaveBeenCalledWith(err.output.payload);
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next with non-Boom error', () => {
    const err = new Error('Regular Error');
    const req = {};
    const res = {
      status: jest.fn(),
      json: jest.fn()
    };
    const next = jest.fn();

    errorBoomHandler(err, req, res, next);

    expect(Logs.logInfo).toHaveBeenCalledWith(`[errorBoomHandler]`);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith(err);
  });
});

describe('errorHandler', () => {
  it('should log error and respond with error details', () => {
    const err = {
      message: 'Internal Server Error',
      stack: 'Error stack',
      statusCode: 500
    };
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    process.env.NODE_ENV = 'development';
    errorHandler(err, req, res, next);

    expect(Logs.logInfo).toHaveBeenCalledWith(`[errorHandler]`);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: err.message,
      stack: 'Error stack'
    });
    expect(next).not.toHaveBeenCalled();
  });

  it('should respond without stack trace in production', () => {
    const err = {
      message: 'Internal Server Error',
      stack: 'Error stack',
      statusCode: 500
    };
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    process.env.NODE_ENV = 'production';
    errorHandler(err, req, res, next);

    expect(Logs.logInfo).toHaveBeenCalledWith(`[errorHandler]`);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: err.message,
      stack: null
    });
    expect(next).not.toHaveBeenCalled();
  });
});
