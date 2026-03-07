import { describe, it, expect } from '@jest/globals';
import { ibge } from '../src/index.js';
import { server, http, HttpResponse } from './setup.js';

describe('IBGE Module', () => {
  describe('getEstados', () => {
    it('should fetch all states', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/ibge/uf/v1', () => {
          return HttpResponse.json([
            {
              id: 35,
              sigla: 'SP',
              nome: 'São Paulo',
              regiao: {
                id: 3,
                sigla: 'SE',
                nome: 'Sudeste',
              },
            },
          ]);
        })
      );

      const result = await ibge().getEstados();

      expect(Array.isArray(result)).toBe(true);
      expect(result[0]).toHaveProperty('sigla');
      expect(result[0]).toHaveProperty('nome');
      expect(result[0]).toHaveProperty('regiao');
    });
  });

  describe('getEstadoBySigla', () => {
    it('should fetch state by sigla', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/ibge/uf/v1/SP', () => {
          return HttpResponse.json({
            id: 35,
            sigla: 'SP',
            nome: 'São Paulo',
            regiao: {
              id: 3,
              sigla: 'SE',
              nome: 'Sudeste',
            },
          });
        })
      );

      const result = await ibge().getEstadoBySigla('SP');

      expect(result.sigla).toBe('SP');
      expect(result.nome).toBe('São Paulo');
    });
  });

  describe('getMunicipios', () => {
    it('should fetch municipalities by state', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/ibge/municipios/v1/SP', () => {
          return HttpResponse.json([
            {
              nome: 'São Paulo',
              codigo_ibge: '3550308',
            },
            {
              nome: 'Campinas',
              codigo_ibge: '3509502',
            },
          ]);
        })
      );

      const result = await ibge().getMunicipios('SP');

      expect(Array.isArray(result)).toBe(true);
      expect(result[0]).toHaveProperty('nome');
      expect(result[0]).toHaveProperty('codigo_ibge');
    });
  });
});
