import { describe, it, expect } from '@jest/globals';
import { feriados } from '../src/index.js';
import { server, http, HttpResponse } from './setup.js';

describe('Feriados Module', () => {
  describe('getFeriadosByAno', () => {
    it('should fetch holidays for a given year', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/feriados/v1/2024', () => {
          return HttpResponse.json([
            {
              date: '2024-01-01',
              name: 'Confraternização mundial',
              type: 'national',
            },
            {
              date: '2024-02-13',
              name: 'Carnaval',
              type: 'national',
            },
          ]);
        })
      );

      const result = await feriados().getFeriadosByAno(2024);

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty('date');
      expect(result[0]).toHaveProperty('name');
      expect(result[0]).toHaveProperty('type');
    });
  });
});
