import { BrasilAPIClient } from '../client.js';
import type { RegistroBRResponse } from '../types.js';

export class RegistroBrModule {
  constructor(private client: BrasilAPIClient) {}

  async getDomainStatus(domain: string): Promise<RegistroBRResponse> {
    return this.client.get<RegistroBRResponse>(`/registrobr/v1/${domain}`);
  }
}
