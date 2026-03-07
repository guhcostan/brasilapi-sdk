import { describe, it, expect } from '@jest/globals';
import { BrasilAPIClient } from '../src/client.js';
import {
  BrasilAPIError,
  NotFoundError,
  ValidationError,
} from '../src/errors.js';
import { server, http, HttpResponse } from './setup.js';

describe('BrasilAPIClient', () => {
  const client = new BrasilAPIClient();

  describe('Error Handling', () => {
    it('should throw NotFoundError on 404', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/test', () => {
          return HttpResponse.json(
            { message: 'Not found' },
            { status: 404 }
          );
        })
      );

      await expect(client.get('/test')).rejects.toThrow(NotFoundError);
    });

    it('should throw ValidationError on 400', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/test', () => {
          return HttpResponse.json(
            { message: 'Invalid parameter' },
            { status: 400 }
          );
        })
      );

      await expect(client.get('/test')).rejects.toThrow(ValidationError);
    });

    it(
      'should throw BrasilAPIError on other HTTP errors',
      async () => {
        server.use(
          http.get('https://brasilapi.com.br/api/test', () => {
            return HttpResponse.json(
              { message: 'Internal server error' },
              { status: 500 }
            );
          })
        );

        await expect(
          client.get('/test', { retries: 0 })
        ).rejects.toThrow(BrasilAPIError);
      },
      10000
    );
  });

  describe('Retry Logic', () => {
    it(
      'should retry on network errors',
      async () => {
        let attempts = 0;

        server.use(
          http.get('https://brasilapi.com.br/api/test', () => {
            attempts++;
            if (attempts < 3) {
              return HttpResponse.error();
            }
            return HttpResponse.json({ success: true });
          })
        );

        const result = await client.get<{ success: boolean }>('/test', {
          retries: 3,
          retryDelay: 10,
        });

        expect(result.success).toBe(true);
        expect(attempts).toBe(3);
      },
      15000
    );

    it('should not retry on 404 errors', async () => {
      let attempts = 0;

      server.use(
        http.get('https://brasilapi.com.br/api/test', () => {
          attempts++;
          return HttpResponse.json({ message: 'Not found' }, { status: 404 });
        })
      );

      await expect(
        client.get('/test', { retries: 3 })
      ).rejects.toThrow(NotFoundError);

      expect(attempts).toBe(1);
    });
  });
});
