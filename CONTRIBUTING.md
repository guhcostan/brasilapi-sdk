# Contributing to Brasil API Promise

Thank you for your interest in contributing to Brasil API Promise! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/brasil-api-promisse.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Install dependencies: `npm install`

## Development Workflow

### Running Tests

```bash
npm test

npm run test:watch

npm run coverage
```

### Code Quality

```bash
npm run lint

npm run lint:fix

npm run format

npm run typecheck
```

### Building

```bash
npm run build
```

## Code Standards

- Write TypeScript with strict type checking enabled
- Follow the existing code style (enforced by ESLint and Prettier)
- Write tests for new features
- Ensure all tests pass before submitting PR
- Keep test coverage above 80%

## Pull Request Process

1. Update README.md with details of changes if applicable
2. Ensure all tests pass and code is formatted
3. Update CHANGELOG.md with your changes
4. The PR will be merged once reviewed and approved

## Commit Messages

Use clear and meaningful commit messages:

- `feat: add new endpoint for X`
- `fix: resolve issue with Y`
- `docs: update README with Z`
- `test: add tests for W`
- `refactor: improve V implementation`

## Questions?

Feel free to open an issue for any questions or concerns.
