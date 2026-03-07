import { BrasilAPIClient } from '../client.js';
import type { IBGEEstadoResponse, IBGEMunicipioResponse } from '../types.js';

export class IbgeModule {
  constructor(private client: BrasilAPIClient) {}

  async getEstados(): Promise<IBGEEstadoResponse[]> {
    return this.client.get<IBGEEstadoResponse[]>('/ibge/uf/v1');
  }

  async getEstadoBySigla(siglaUF: string): Promise<IBGEEstadoResponse> {
    return this.client.get<IBGEEstadoResponse>(`/ibge/uf/v1/${siglaUF}`);
  }

  async getMunicipios(
    siglaUF: string,
    providers?: string[]
  ): Promise<IBGEMunicipioResponse[]> {
    const query = providers ? `?providers=${providers.join(',')}` : '';
    return this.client.get<IBGEMunicipioResponse[]>(
      `/ibge/municipios/v1/${siglaUF}${query}`
    );
  }
}
