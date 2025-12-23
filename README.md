# Carbon Date

A modern, lightweight date/time library for JavaScript and TypeScript, inspired by PHP's Carbon.

## Installation
```bash
npm install carbon.js
# or
yarn add carbon.js
# or
pnpm add carbon.js
```

## Usage

### JavaScript/ES6
```javascript
import Carbon from 'carbon.js';

const now = Carbon.now();
const tomorrow = Carbon.tomorrow();
console.log(now.format('Y-m-d H:i:s'));
```

### CommonJS
```javascript
const { Carbon } = require('carbon.js');

const now = Carbon.now();
console.log(now.diffForHumans());
```

### TypeScript
```typescript
import Carbon from 'carbon.js';

const date: Carbon = Carbon.parse('2024-12-25');
date.addDays(5);
console.log(date.toDateString());
```

## API

### Creating Instances
- `Carbon.now()` - Current date/time
- `Carbon.today()` - Today at 00:00:00
- `Carbon.tomorrow()` - Tomorrow at 00:00:00
- `Carbon.yesterday()` - Yesterday at 00:00:00
- `Carbon.parse(dateString)` - Parse any date string
- `Carbon.create(year, month, day, hour, minute, second)` - Create from components

### Manipulation
```typescript
const date = Carbon.now();
date.addDays(5);
date.subMonths(2);
date.startOfMonth();
date.endOfWeek();
```

### Comparison
```typescript
if (date.isToday()) { }
if (date.isFuture()) { }
if (date.isAfter(otherDate)) { }
if (date.isBetween(start, end)) { }
```

### Difference
```typescript
date.diffInDays();
date.diffInHours(otherDate);
date.diffForHumans(); // "3 days ago"
```

### Formatting
```typescript
date.format('Y-m-d H:i:s');
date.toDateString(); // "2024-12-22"
date.toISOString();
```

## License

MIT
