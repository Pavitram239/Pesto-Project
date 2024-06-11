import { StatusCodes } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor() {
    super();
    this.message = 'not found';
    this.name = 'NotFoundError';
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor() {
    super();
    this.message = 'bad request';
    this.name = 'BadRequestError';
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export class UnauthenticatedError extends Error {
  constructor() {
    super();
    this.message = 'unauthenticated';
    this.name = 'UnauthenticatedError';
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super();
    this.message = 'unauthorized';
    this.name = 'UnauthorizedError';
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

export class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InternalServerError';
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}
