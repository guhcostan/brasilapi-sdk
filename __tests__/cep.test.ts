import { describe, it, expect } from '@jest/globals';
import { cep } from '../src/index.js';
import { server, http, HttpResponse } from './setup.js';
import { NotFoundError } from '../src/errors.js';

describe('CEP Module', () => {
  describe('getCep', () => {
    it('should fetch CEP data successfully', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/cep/v1/05010000', () => {
          return HttpResponse.json({
            cep: '05010000',
            state: 'SP',
            city: 'São Paulo',
            neighborhood: 'Perdizes',
            street: 'Rua Caiubi',
            service: 'viacep',
          });
        })
      );

      const result = await cep().getCep('05010000');

      expect(result).toEqual({
        cep: '05010000',
        state: 'SP',
        city: 'São Paulo',
        neighborhood: 'Perdizes',
        street: 'Rua Caiubi',
        service: 'viacep',
      });
    });

    it('should handle CEP with formatting', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/cep/v1/05010000', () => {
          return HttpResponse.json({
            cep: '05010000',
            state: 'SP',
            city: 'São Paulo',
            neighborhood: 'Perdizes',
            street: 'Rua Caiubi',
            service: 'viacep',
          });
        })
      );

      const result = await cep().getCep('05010-000');
      expect(result.cep).toBe('05010000');
    });

    it('should throw NotFoundError for invalid CEP', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/cep/v1/99999999', () => {
          return HttpResponse.json(
            {
              message: 'Todos os serviços de CEP retornaram erro.',
            },
            { status: 404 }
          );
        })
      );

      await expect(cep().getCep('99999999')).rejects.toThrow(NotFoundError);
    });
  });

  describe('getCepV2', () => {
    it('should fetch CEP V2 data with geolocation', async () => {
      server.use(
        http.get('https://brasilapi.com.br/api/cep/v2/05010000', () => {
          return HttpResponse.json({
            cep: '05010000',
            state: 'SP',
            city: 'São Paulo',
            neighborhood: 'Perdizes',
            street: 'Rua Caiubi',
            location: {
              type: 'Point',
              coordinates: {
                longitude: '-46.6753',
                latitude: '-23.5358',
              },
            },
          });
        })
      );

      const result = await cep().getCepV2('05010000');

      expect(result.location).toBeDefined();
      expect(result.location.coordinates.latitude).toBeDefined();
      expect(result.location.coordinates.longitude).toBeDefined();
    });
  });
});
