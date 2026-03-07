import { BrasilAPIClient } from '../client.js';
import type { NCMResponse } from '../types.js';

export class NcmModule {
  constructor(private client: BrasilAPIClient) {}

  async getNcm(code: string): Promise<NCMResponse> {
    return this.client.get<NCMResponse>(`/ncm/v1/${code}`);
  }

  async searchNcm(search: string): Promise<NCMResponse[]> {
    return this.client.get<NCMResponse[]>(
      `/ncm/v1?search=${encodeURIComponent(search)}`
    );
  }

  async getAllNcm(): Promise<NCMResponse[]> {
    return this.client.get<NCMResponse[]>('/ncm/v1');
  }
}
