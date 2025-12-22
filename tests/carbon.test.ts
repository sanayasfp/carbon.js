import Carbon from '../src/index';

describe('Carbon', () => {
  describe('Constructor and static methods', () => {
    it('should create a Carbon instance with current date', () => {
      const carbon = new Carbon();
      expect(carbon).toBeInstanceOf(Carbon);
      expect(carbon.toDate()).toBeInstanceOf(Date);
    });

    it('should create a Carbon instance from a Date object', () => {
      const date = new Date('2024-01-15');
      const carbon = new Carbon(date);
      expect(carbon.toDate().getTime()).toBe(date.getTime());
    });

    it('should create a Carbon instance from a string', () => {
      const carbon = new Carbon('2024-01-15');
      expect(carbon.toDate().getFullYear()).toBe(2024);
      expect(carbon.toDate().getMonth()).toBe(0);
    });

    it('should create a Carbon instance using now()', () => {
      const carbon = Carbon.now();
      const now = new Date();
      expect(Math.abs(carbon.valueOf() - now.getTime())).toBeLessThan(100);
    });

    it('should create a Carbon instance for today at midnight', () => {
      const carbon = Carbon.today();
      expect(carbon.toDate().getHours()).toBe(0);
      expect(carbon.toDate().getMinutes()).toBe(0);
      expect(carbon.toDate().getSeconds()).toBe(0);
      expect(carbon.toDate().getMilliseconds()).toBe(0);
    });

    it('should create a Carbon instance for tomorrow', () => {
      const carbon = Carbon.tomorrow();
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      expect(carbon.toDate().getDate()).toBe(tomorrow.getDate());
    });

    it('should create a Carbon instance for yesterday', () => {
      const carbon = Carbon.yesterday();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      expect(carbon.toDate().getDate()).toBe(yesterday.getDate());
    });

    it('should parse a date string', () => {
      const carbon = Carbon.parse('2024-06-15');
      expect(carbon.toDate().getFullYear()).toBe(2024);
      expect(carbon.toDate().getMonth()).toBe(5);
      expect(carbon.toDate().getDate()).toBe(15);
    });
  });

  describe('Date manipulation', () => {
    it('should add days', () => {
      const carbon = new Carbon('2024-01-15');
      carbon.addDays(5);
      expect(carbon.toDate().getDate()).toBe(20);
    });

    it('should subtract days', () => {
      const carbon = new Carbon('2024-01-15');
      carbon.subDays(5);
      expect(carbon.toDate().getDate()).toBe(10);
    });

    it('should add months', () => {
      const carbon = new Carbon('2024-01-15');
      carbon.addMonths(2);
      expect(carbon.toDate().getMonth()).toBe(2);
    });

    it('should subtract months', () => {
      const carbon = new Carbon('2024-03-15');
      carbon.subMonths(2);
      expect(carbon.toDate().getMonth()).toBe(0);
    });

    it('should add years', () => {
      const carbon = new Carbon('2024-01-15');
      carbon.addYears(2);
      expect(carbon.toDate().getFullYear()).toBe(2026);
    });

    it('should subtract years', () => {
      const carbon = new Carbon('2024-01-15');
      carbon.subYears(2);
      expect(carbon.toDate().getFullYear()).toBe(2022);
    });
  });

  describe('Formatting and conversion', () => {
    it('should format date with default format', () => {
      const carbon = new Carbon('2024-01-15T10:30:45');
      const formatted = carbon.format();
      expect(formatted).toMatch(/2024-01-15/);
    });

    it('should format date with custom format', () => {
      const carbon = new Carbon('2024-01-15T10:30:45');
      const formatted = carbon.format('YYYY-MM-DD');
      expect(formatted).toBe('2024-01-15');
    });

    it('should convert to Date object', () => {
      const carbon = new Carbon('2024-01-15');
      const date = carbon.toDate();
      expect(date).toBeInstanceOf(Date);
    });

    it('should convert to ISO string', () => {
      const carbon = new Carbon('2024-01-15T00:00:00.000Z');
      const isoString = carbon.toISOString();
      expect(isoString).toContain('2024-01-15');
    });

    it('should convert to string', () => {
      const carbon = new Carbon('2024-01-15');
      const str = carbon.toString();
      expect(typeof str).toBe('string');
    });

    it('should get valueOf', () => {
      const date = new Date('2024-01-15');
      const carbon = new Carbon(date);
      expect(carbon.valueOf()).toBe(date.valueOf());
    });
  });

  describe('Comparison methods', () => {
    it('should check if date is before another date', () => {
      const carbon1 = new Carbon('2024-01-15');
      const carbon2 = new Carbon('2024-01-20');
      expect(carbon1.isBefore(carbon2)).toBe(true);
      expect(carbon2.isBefore(carbon1)).toBe(false);
    });

    it('should check if date is after another date', () => {
      const carbon1 = new Carbon('2024-01-15');
      const carbon2 = new Carbon('2024-01-20');
      expect(carbon2.isAfter(carbon1)).toBe(true);
      expect(carbon1.isAfter(carbon2)).toBe(false);
    });

    it('should check if date is same as another date', () => {
      const date = new Date('2024-01-15T10:30:00');
      const carbon1 = new Carbon(date);
      const carbon2 = new Carbon(date);
      expect(carbon1.isSame(carbon2)).toBe(true);
    });

    it('should compare with Date objects', () => {
      const carbon = new Carbon('2024-01-15');
      const date = new Date('2024-01-20');
      expect(carbon.isBefore(date)).toBe(true);
    });
  });

  describe('Cloning', () => {
    it('should clone a Carbon instance', () => {
      const carbon1 = new Carbon('2024-01-15');
      const carbon2 = carbon1.clone();
      expect(carbon1.isSame(carbon2)).toBe(true);
      
      carbon2.addDays(5);
      expect(carbon1.isSame(carbon2)).toBe(false);
    });
  });
});
