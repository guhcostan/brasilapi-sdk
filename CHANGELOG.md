# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-03-07

### Changed
- **BREAKING**: Package renamed from `brasil-api-promise` to `brasilapi-sdk`
- Repository renamed to match new package name

## [2.0.0-beta] - 2026-03-07

### Added

- Complete TypeScript rewrite with full type definitions
- New endpoints:
  - Câmbio (currency exchange rates)
  - Corretoras (stock brokers from CVM)
  - CPTEC (weather forecasts and ocean data)
  - ISBN (book information)
  - NCM (Mercosul Common Nomenclature)
  - PIX (PIX participants)
  - Registro.br (Brazilian domain status)
  - Taxas (interest rates and indices)
- Custom error types (NotFoundError, ValidationError, NetworkError)
- Automatic retry logic with exponential backoff
- Comprehensive test suite with MSW mocking
- ESM and CommonJS dual package support
- GitHub Actions CI/CD workflows
- Code quality tools (ESLint, Prettier)

### Changed

- **BREAKING**: Requires Node.js >= 18.0.0 for native fetch support
- **BREAKING**: Migrated from CommonJS to ESM-first module system
- **BREAKING**: Improved API interface with modular design
- Replaced Babel build system with tsup
- Removed node-fetch dependency (uses native fetch)
- Updated all dependencies to latest versions

### Fixed

- Typo in package.json script: "covarage" → "coverage"
- Improved error handling and validation

### Removed

- Babel dependencies (no longer needed)
- node-fetch dependency (using native fetch)

## [1.1.1] - 2023-06-23

### Fixed

- Fixed typo in README variable name

## [1.1.0] - 2022-07-01

### Added

- Created BrasilAPI object structure
- Organized endpoints into modules

## [1.0.0] - Initial Release

### Added

- Basic CEP lookup
- Bank information
- CNPJ queries
- DDD information
- National holidays
- FIPE vehicle prices
- IBGE data (states and municipalities)
