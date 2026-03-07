import { BrasilAPIClient } from '../client.js';
import type { CepResponse, CepV2Response } from '../types.js';

export class CepModule {
  constructor(private client: BrasilAPIClient) {}

  async getCep(cep: string): Promise<CepResponse> {
    const cleanCep = cep.replace(/\D/g, '');
    return this.client.get<CepResponse>(`/cep/v1/${cleanCep}`);
  }

  async getCepV2(cep: string): Promise<CepV2Response> {
    const cleanCep = cep.replace(/\D/g, '');
    return this.client.get<CepV2Response>(`/cep/v2/${cleanCep}`);
  }
}
