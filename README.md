# @sanayasfp/carbon-js

A modern date/time library for JavaScript and TypeScript inspired by PHP Carbon.

## Installation

```bash
npm install @sanayasfp/carbon-js
```

## Usage

```typescript
import { Carbon } from '@sanayasfp/carbon-js';

// Create a new Carbon instance
const now = Carbon.now();
const today = Carbon.today();
const yesterday = Carbon.yesterday();
const tomorrow = Carbon.tomorrow();

// Work with dates
const date = new Carbon('2024-01-01');
console.log(date.year); // 2024
console.log(date.month); // 1
console.log(date.day); // 1

// Manipulate dates
date.addDays(5);
date.subDays(3);

// Format and convert
console.log(date.toISOString());
console.log(date.toString());
console.log(date.format('YYYY-MM-DD'));
```

## Features

- 🚀 Modern TypeScript/JavaScript API
- 📦 Lightweight with zero dependencies
- 🔧 Easy to use and intuitive
- ✅ Fully typed with TypeScript
- 📅 Inspired by PHP Carbon

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Format code
npm run format
```

## License

MIT License - see LICENSE file for details
