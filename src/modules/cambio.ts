import { BrasilAPIClient } from '../client.js';
import type { CambioMoedaResponse, CambioCotacaoResponse } from '../types.js';

export class CambioModule {
  constructor(private client: BrasilAPIClient) {}

  async getMoedas(): Promise<CambioMoedaResponse[]> {
    return this.client.get<CambioMoedaResponse[]>('/cambio/v1/moedas');
  }

  async getCotacao(
    moeda: string,
    data: string
  ): Promise<CambioCotacaoResponse> {
    return this.client.get<CambioCotacaoResponse>(
      `/cambio/v1/cotacao/${moeda}/${data}`
    );
  }
}
