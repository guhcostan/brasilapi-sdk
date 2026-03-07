import { BrasilAPIClient } from '../client.js';
import type { ISBNResponse } from '../types.js';

export class IsbnModule {
  constructor(private client: BrasilAPIClient) {}

  async getIsbn(isbn: string, providers?: string[]): Promise<ISBNResponse> {
    const cleanIsbn = isbn.replace(/\D/g, '');
    const query = providers ? `?providers=${providers.join(',')}` : '';
    return this.client.get<ISBNResponse>(`/isbn/v1/${cleanIsbn}${query}`);
  }
}
