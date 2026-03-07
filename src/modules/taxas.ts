import { BrasilAPIClient } from '../client.js';
import type { TaxaResponse } from '../types.js';

export class TaxasModule {
  constructor(private client: BrasilAPIClient) {}

  async getTaxa(sigla: string): Promise<TaxaResponse> {
    return this.client.get<TaxaResponse>(`/taxas/v1/${sigla}`);
  }

  async getAllTaxas(): Promise<TaxaResponse[]> {
    return this.client.get<TaxaResponse[]>('/taxas/v1');
  }
}
