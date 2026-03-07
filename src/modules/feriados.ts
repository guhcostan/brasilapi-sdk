import { BrasilAPIClient } from '../client.js';
import type { FeriadoResponse } from '../types.js';

export class FeriadosModule {
  constructor(private client: BrasilAPIClient) {}

  async getFeriadosByAno(ano: number): Promise<FeriadoResponse[]> {
    return this.client.get<FeriadoResponse[]>(`/feriados/v1/${ano}`);
  }
}
