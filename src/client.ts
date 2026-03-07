import {
  BrasilAPIError,
  NetworkError,
  NotFoundError,
  ValidationError,
} from './errors.js';

export interface RequestOptions {
  retries?: number;
  retryDelay?: number;
}

export class BrasilAPIClient {
  private baseUrl = 'https://brasilapi.com.br/api';
  private defaultRetries = 3;
  private defaultRetryDelay = 1000;

  private async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private async fetchWithRetry<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const retries = options.retries ?? this.defaultRetries;
    const retryDelay = options.retryDelay ?? this.defaultRetryDelay;
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await fetch(endpoint);

        if (response.status === 404) {
          const errorData = (await response.json().catch(() => ({}))) as {
            message?: string;
          };
          throw new NotFoundError(errorData.message || 'Resource not found');
        }

        if (response.status === 400) {
          const errorData = (await response.json().catch(() => ({}))) as {
            message?: string;
          };
          throw new ValidationError(
            errorData.message || 'Invalid request parameters'
          );
        }

        if (!response.ok) {
          const errorData = (await response.json().catch(() => ({}))) as {
            message?: string;
            type?: string;
          };
          throw new BrasilAPIError(
            errorData.message ||
              `HTTP ${response.status}: ${response.statusText}`,
            response.status,
            errorData.type
          );
        }

        const data = (await response.json()) as {
          errors?: unknown[];
          message?: string;
        };

        if (
          data.errors &&
          Array.isArray(data.errors) &&
          data.errors.length > 0
        ) {
          throw new BrasilAPIError(data.message || 'API returned errors');
        }

        return data as T;
      } catch (error) {
        lastError = error as Error;

        if (
          error instanceof NotFoundError ||
          error instanceof ValidationError
        ) {
          throw error;
        }

        if (
          error instanceof TypeError ||
          (error as Error).name === 'FetchError'
        ) {
          lastError = new NetworkError(
            `Network error: ${(error as Error).message}`
          );
        }

        if (attempt < retries) {
          await this.sleep(retryDelay * Math.pow(2, attempt));
          continue;
        }

        throw lastError;
      }
    }

    throw lastError || new BrasilAPIError('Unknown error occurred');
  }

  async get<T>(path: string, options?: RequestOptions): Promise<T> {
    const url = `${this.baseUrl}${path}`;
    return this.fetchWithRetry<T>(url, options);
  }
}
