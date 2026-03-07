import { BrasilAPIClient } from '../client.js';
import type { CorretoraResponse } from '../types.js';

export class CorretorasModule {
  constructor(private client: BrasilAPIClient) {}

  async getCorretoras(): Promise<CorretoraResponse[]> {
    return this.client.get<CorretoraResponse[]>('/cvm/corretoras/v1');
  }

  async getCorretoraByCode(cnpj: string): Promise<CorretoraResponse> {
    const cleanCnpj = cnpj.replace(/\D/g, '');
    return this.client.get<CorretoraResponse>(
      `/cvm/corretoras/v1/${cleanCnpj}`
    );
  }
}
