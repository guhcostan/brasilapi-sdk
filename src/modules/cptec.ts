import { BrasilAPIClient } from '../client.js';
import type {
  CptecCidadeResponse,
  CptecClimaCapitalResponse,
  CptecPrevisaoResponse,
  CptecOndaResponse,
} from '../types.js';

export class CptecModule {
  constructor(private client: BrasilAPIClient) {}

  async getCidades(): Promise<CptecCidadeResponse[]> {
    return this.client.get<CptecCidadeResponse[]>('/cptec/v1/cidade');
  }

  async buscarCidade(cityName: string): Promise<CptecCidadeResponse[]> {
    return this.client.get<CptecCidadeResponse[]>(
      `/cptec/v1/cidade/${encodeURIComponent(cityName)}`
    );
  }

  async getClimaCapitais(): Promise<CptecClimaCapitalResponse[]> {
    return this.client.get<CptecClimaCapitalResponse[]>(
      '/cptec/v1/clima/capital'
    );
  }

  async getClimaAeroporto(
    icaoCode: string
  ): Promise<CptecClimaCapitalResponse> {
    return this.client.get<CptecClimaCapitalResponse>(
      `/cptec/v1/clima/aeroporto/${icaoCode}`
    );
  }

  async getPrevisaoCidade(
    cityCode: number,
    days?: number
  ): Promise<CptecPrevisaoResponse> {
    const path = days
      ? `/cptec/v1/clima/previsao/${cityCode}/${days}`
      : `/cptec/v1/clima/previsao/${cityCode}`;
    return this.client.get<CptecPrevisaoResponse>(path);
  }

  async getPrevisaoOceano(
    cityCode: number,
    days?: number
  ): Promise<CptecOndaResponse> {
    const path = days
      ? `/cptec/v1/ondas/${cityCode}/${days}`
      : `/cptec/v1/ondas/${cityCode}`;
    return this.client.get<CptecOndaResponse>(path);
  }
}
