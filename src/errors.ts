export class BrasilAPIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public type?: string
  ) {
    super(message);
    this.name = 'BrasilAPIError';
    Object.setPrototypeOf(this, BrasilAPIError.prototype);
  }
}

export class NetworkError extends BrasilAPIError {
  constructor(message: string) {
    super(message, undefined, 'network');
    this.name = 'NetworkError';
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

export class NotFoundError extends BrasilAPIError {
  constructor(message: string) {
    super(message, 404, 'not_found');
    this.name = 'NotFoundError';
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

export class ValidationError extends BrasilAPIError {
  constructor(message: string) {
    super(message, 400, 'validation');
    this.name = 'ValidationError';
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
