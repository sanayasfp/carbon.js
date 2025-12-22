import { Carbon } from '../src/index';

describe('Carbon', () => {
  describe('constructor', () => {
    it('should create a new instance with current date when no argument provided', () => {
      const carbon = new Carbon();
      expect(carbon).toBeInstanceOf(Carbon);
      expect(carbon.toDate()).toBeInstanceOf(Date);
    });

    it('should create a new instance from a Date object', () => {
      const date = new Date('2024-01-01');
      const carbon = new Carbon(date);
      expect(carbon.year).toBe(2024);
      expect(carbon.month).toBe(1);
      expect(carbon.day).toBe(1);
    });

    it('should create a new instance from a string', () => {
      const carbon = new Carbon('2024-06-15');
      expect(carbon.year).toBe(2024);
      expect(carbon.month).toBe(6);
      expect(carbon.day).toBe(15);
    });
  });

  describe('static methods', () => {
    it('should create a Carbon instance for now', () => {
      const carbon = Carbon.now();
      expect(carbon).toBeInstanceOf(Carbon);
    });

    it('should create a Carbon instance for today', () => {
      const carbon = Carbon.today();
      expect(carbon).toBeInstanceOf(Carbon);
      const date = carbon.toDate();
      expect(date.getHours()).toBe(0);
      expect(date.getMinutes()).toBe(0);
      expect(date.getSeconds()).toBe(0);
      expect(date.getMilliseconds()).toBe(0);
    });

    it('should create a Carbon instance for yesterday', () => {
      const yesterday = Carbon.yesterday();
      const today = Carbon.today();
      const diff = today.toDate().getTime() - yesterday.toDate().getTime();
      expect(diff).toBe(24 * 60 * 60 * 1000); // 1 day in milliseconds
    });

    it('should create a Carbon instance for tomorrow', () => {
      const tomorrow = Carbon.tomorrow();
      const today = Carbon.today();
      const diff = tomorrow.toDate().getTime() - today.toDate().getTime();
      expect(diff).toBe(24 * 60 * 60 * 1000); // 1 day in milliseconds
    });
  });

  describe('manipulation methods', () => {
    it('should add days to the date', () => {
      const carbon = new Carbon('2024-01-01');
      carbon.addDays(5);
      expect(carbon.day).toBe(6);
    });

    it('should subtract days from the date', () => {
      const carbon = new Carbon('2024-01-10');
      carbon.subDays(5);
      expect(carbon.day).toBe(5);
    });
  });

  describe('getters', () => {
    it('should get the year', () => {
      const carbon = new Carbon('2024-01-01');
      expect(carbon.year).toBe(2024);
    });

    it('should get the month', () => {
      const carbon = new Carbon('2024-06-15');
      expect(carbon.month).toBe(6);
    });

    it('should get the day', () => {
      const carbon = new Carbon('2024-06-15');
      expect(carbon.day).toBe(15);
    });
  });

  describe('conversion methods', () => {
    it('should convert to Date object', () => {
      const carbon = new Carbon('2024-01-01');
      const date = carbon.toDate();
      expect(date).toBeInstanceOf(Date);
    });

    it('should convert to ISO string', () => {
      const carbon = new Carbon('2024-01-01T00:00:00.000Z');
      const isoString = carbon.toISOString();
      expect(isoString).toContain('2024-01-01');
    });

    it('should convert to string', () => {
      const carbon = new Carbon('2024-01-01');
      const str = carbon.toString();
      expect(typeof str).toBe('string');
    });

    it('should format the date', () => {
      const carbon = new Carbon('2024-01-01');
      const formatted = carbon.format('YYYY-MM-DD');
      expect(typeof formatted).toBe('string');
    });
  });
});
