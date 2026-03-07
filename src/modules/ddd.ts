import { BrasilAPIClient } from '../client.js';
import type { DDDResponse } from '../types.js';

export class DddModule {
  constructor(private client: BrasilAPIClient) {}

  async getDDD(ddd: number | string): Promise<DDDResponse> {
    return this.client.get<DDDResponse>(`/ddd/v1/${ddd}`);
  }
}
