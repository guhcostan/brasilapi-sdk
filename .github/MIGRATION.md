# Migration Guide: v1.x to v2.0

## Overview

Version 2.0 is a complete rewrite of brasil-api-promise with modern TypeScript, ESM support, and many new features.

## Breaking Changes

### Node.js Version Requirement

**v1.x:** Node.js 12+  
**v2.0:** Node.js 18+ (required for native fetch support)

```bash
node --version
```

### Module System

**v1.x:** CommonJS only  
**v2.0:** ESM-first with CommonJS fallback

```javascript
const BrasilAPI = require('brasil-api-promise');

import BrasilAPI from 'brasil-api-promise';
```

### API Structure

The API structure has been improved but remains largely compatible:

**v1.x:**
```javascript
import BrasilAPI from 'brasil-api-promise';

const cepModule = BrasilAPI.cep();
const result = await cepModule.getCep('05010000');
```

**v2.0:** (Same, fully compatible!)
```javascript
import BrasilAPI from 'brasil-api-promise';

const cepModule = BrasilAPI.cep();
const result = await cepModule.getCep('05010000');
```

### Error Handling

**v1.x:** Plain objects  
**v2.0:** Custom Error classes

```javascript
try {
  await cep().getCep('00000000');
} catch (error) {
  if (error instanceof NotFoundError) {
    console.error('CEP not found');
  }
}
```

## New Features

### 8 New Endpoints

- **Câmbio** - Currency exchange rates
- **Corretoras** - Stock brokers from CVM
- **CPTEC** - Weather forecasts and ocean data
- **ISBN** - Book information
- **NCM** - Mercosul Common Nomenclature
- **PIX** - PIX participants
- **Registro.br** - Brazilian domain status
- **Taxas** - Interest rates and indices

### Improved Error Handling

```typescript
import { NotFoundError, ValidationError, NetworkError } from 'brasil-api-promise';

try {
  const result = await cep().getCep('00000000');
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log('Not found');
  } else if (error instanceof ValidationError) {
    console.log('Invalid input');
  } else if (error instanceof NetworkError) {
    console.log('Network issue');
  }
}
```

### Automatic Retry Logic

Network errors now automatically retry with exponential backoff:

```typescript
import { BrasilAPIClient } from 'brasil-api-promise';

const client = new BrasilAPIClient();
const data = await client.get('/cep/v1/05010000', {
  retries: 3,
  retryDelay: 1000,
});
```

### Full TypeScript Support

All responses are now fully typed:

```typescript
import { CepResponse } from 'brasil-api-promise';

const result: CepResponse = await cep().getCep('05010000');
```

## Migration Steps

1. **Update Node.js** to version 18 or higher
2. **Update package**: `npm install brasil-api-promise@^2.0.0`
3. **Update imports** if using CommonJS:
   ```javascript
   const BrasilAPI = require('brasil-api-promise').default;
   ```
4. **Update error handling** to use Error classes instead of plain objects
5. **Run tests** to ensure everything works

## Questions?

If you encounter any issues during migration, please [open an issue](https://github.com/guhcostan/brasil-api-promisse/issues).
