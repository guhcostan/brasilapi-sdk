import { describe, it, expect } from '@jest/globals';
import { banks } from '../src/index.js';
import { server, http, HttpResponse } from './setup.js';

describe('Banks Module', () => {
  describe('getBanks', () => {
    it('should fetch all banks', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/banks/v1', () => {
          return HttpResponse.json([
            {
              ispb: '00000000',
              name: 'BCO DO BRASIL S.A.',
              code: 1,
              fullName: 'Banco do Brasil S.A.',
            },
            {
              ispb: '00000208',
              name: 'BRB - BCO DE BRASILIA S.A.',
              code: 70,
              fullName: 'BRB - BANCO DE BRASILIA S.A.',
            },
          ]);
        })
      );

      const result = await banks().getBanks();

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty('ispb');
      expect(result[0]).toHaveProperty('name');
      expect(result[0]).toHaveProperty('code');
    });
  });

  describe('getBankByCode', () => {
    it('should fetch bank by code', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/banks/v1/1', () => {
          return HttpResponse.json({
            ispb: '00000000',
            name: 'BCO DO BRASIL S.A.',
            code: 1,
            fullName: 'Banco do Brasil S.A.',
          });
        })
      );

      const result = await banks().getBankByCode(1);

      expect(result.code).toBe(1);
      expect(result.name).toBe('BCO DO BRASIL S.A.');
    });
  });
});
