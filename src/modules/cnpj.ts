import { BrasilAPIClient } from '../client.js';
import type { CNPJResponse } from '../types.js';

export class CnpjModule {
  constructor(private client: BrasilAPIClient) {}

  async getCnpj(cnpj: string): Promise<CNPJResponse> {
    const cleanCnpj = cnpj.replace(/\D/g, '');
    return this.client.get<CNPJResponse>(`/cnpj/v1/${cleanCnpj}`);
  }
}
