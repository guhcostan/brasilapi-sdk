import { BrasilAPIClient } from '../client.js';
import type { PixParticipanteResponse } from '../types.js';

export class PixModule {
  constructor(private client: BrasilAPIClient) {}

  async getParticipantes(): Promise<PixParticipanteResponse[]> {
    return this.client.get<PixParticipanteResponse[]>('/pix/v1/participants');
  }
}
