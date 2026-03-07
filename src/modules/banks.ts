import { BrasilAPIClient } from '../client.js';
import type { BankResponse } from '../types.js';

export class BanksModule {
  constructor(private client: BrasilAPIClient) {}

  async getBanks(): Promise<BankResponse[]> {
    return this.client.get<BankResponse[]>('/banks/v1');
  }

  async getBankByCode(code: number): Promise<BankResponse> {
    return this.client.get<BankResponse>(`/banks/v1/${code}`);
  }
}
