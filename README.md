# carbon.js

A simple TypeScript/JavaScript API extension for DateTime, inspired by PHP's Carbon library.

## Installation

```bash
npm install @sanayasfp/carbon.js
```

## Usage

### Basic Usage

```typescript
import Carbon from '@sanayasfp/carbon.js';

// Create a Carbon instance for the current date and time
const now = Carbon.now();

// Create a Carbon instance for today at midnight
const today = Carbon.today();

// Create a Carbon instance for tomorrow
const tomorrow = Carbon.tomorrow();

// Create a Carbon instance for yesterday
const yesterday = Carbon.yesterday();

// Parse a date string
const date = Carbon.parse('2024-01-15');
```

### Date Manipulation

```typescript
import Carbon from '@sanayasfp/carbon.js';

const date = Carbon.parse('2024-01-15');

// Add days
date.addDays(5); // 2024-01-20

// Subtract days
date.subDays(3); // 2024-01-17

// Add months
date.addMonths(2); // 2024-03-17

// Subtract months
date.subMonths(1); // 2024-02-17

// Add years
date.addYears(1); // 2025-02-17

// Subtract years
date.subYears(1); // 2024-02-17
```

### Formatting

```typescript
import Carbon from '@sanayasfp/carbon.js';

const date = Carbon.parse('2024-01-15T10:30:45');

// Default format (YYYY-MM-DD HH:mm:ss)
console.log(date.format()); // 2024-01-15 10:30:45

// Custom format
console.log(date.format('YYYY-MM-DD')); // 2024-01-15
console.log(date.format('DD/MM/YYYY')); // 15/01/2024
```

### Comparison

```typescript
import Carbon from '@sanayasfp/carbon.js';

const date1 = Carbon.parse('2024-01-15');
const date2 = Carbon.parse('2024-01-20');

// Check if date1 is before date2
console.log(date1.isBefore(date2)); // true

// Check if date1 is after date2
console.log(date1.isAfter(date2)); // false

// Check if dates are the same
console.log(date1.isSame(date2)); // false
```

### Conversion

```typescript
import Carbon from '@sanayasfp/carbon.js';

const carbon = Carbon.now();

// Convert to Date object
const date = carbon.toDate();

// Convert to ISO string
const isoString = carbon.toISOString();

// Convert to string
const str = carbon.toString();

// Get timestamp
const timestamp = carbon.valueOf();
```

### Cloning

```typescript
import Carbon from '@sanayasfp/carbon.js';

const date1 = Carbon.parse('2024-01-15');
const date2 = date1.clone();

date2.addDays(5);

console.log(date1.format('YYYY-MM-DD')); // 2024-01-15
console.log(date2.format('YYYY-MM-DD')); // 2024-01-20
```

## API Reference

### Static Methods

- `Carbon.now()` - Create a Carbon instance for the current date and time
- `Carbon.today()` - Create a Carbon instance for today at midnight
- `Carbon.tomorrow()` - Create a Carbon instance for tomorrow at midnight
- `Carbon.yesterday()` - Create a Carbon instance for yesterday at midnight
- `Carbon.parse(date)` - Create a Carbon instance from a date string, Date object, or timestamp

### Instance Methods

#### Manipulation
- `addDays(days)` - Add days to the date
- `subDays(days)` - Subtract days from the date
- `addMonths(months)` - Add months to the date
- `subMonths(months)` - Subtract months from the date
- `addYears(years)` - Add years to the date
- `subYears(years)` - Subtract years from the date

#### Formatting
- `format(formatString?)` - Format the date as a string (default: 'YYYY-MM-DD HH:mm:ss')

#### Comparison
- `isBefore(other)` - Check if the date is before another date
- `isAfter(other)` - Check if the date is after another date
- `isSame(other)` - Check if the date is the same as another date

#### Conversion
- `toDate()` - Get the underlying Date object
- `toISOString()` - Get ISO string representation
- `toString()` - Get string representation
- `valueOf()` - Get the timestamp in milliseconds

#### Utility
- `clone()` - Clone the current Carbon instance

## Development

### Build

```bash
npm run build
```

### Test

```bash
npm test
```

## License

MIT © Sana Yasfp
