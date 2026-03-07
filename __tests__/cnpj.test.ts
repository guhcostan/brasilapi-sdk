import { describe, it, expect } from '@jest/globals';
import { cnpj } from '../src/index.js';
import { server, http, HttpResponse } from './setup.js';

describe('CNPJ Module', () => {
  describe('getCnpj', () => {
    it('should fetch CNPJ data', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/cnpj/v1/19131243000197', () => {
          return HttpResponse.json({
            cnpj: '19131243000197',
            razao_social: 'OPEN KNOWLEDGE BRASIL',
            nome_fantasia: 'REDE PELO CONHECIMENTO LIVRE',
            uf: 'SP',
            municipio: 'SAO PAULO',
            qsa: [],
            cnaes_secundarios: [],
            regime_tributario: [],
          });
        })
      );

      const result = await cnpj().getCnpj('19131243000197');

      expect(result.cnpj).toBe('19131243000197');
      expect(result.razao_social).toBeDefined();
    });

    it('should handle CNPJ with formatting', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/cnpj/v1/19131243000197', () => {
          return HttpResponse.json({
            cnpj: '19131243000197',
            razao_social: 'OPEN KNOWLEDGE BRASIL',
          });
        })
      );

      const result = await cnpj().getCnpj('19.131.243/0001-97');
      expect(result.cnpj).toBe('19131243000197');
    });
  });
});
