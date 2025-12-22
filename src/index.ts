/**
 * Carbon - A modern date/time library for JavaScript and TypeScript
 * Inspired by PHP Carbon
 */

export class Carbon {
  private date: Date;

  /**
   * Create a new Carbon instance
   * @param date - Optional date to initialize with (defaults to now)
   */
  constructor(date?: Date | string | number) {
    if (date === undefined) {
      this.date = new Date();
    } else if (date instanceof Date) {
      this.date = new Date(date);
    } else {
      this.date = new Date(date);
    }
  }

  /**
   * Create a new Carbon instance for the current date and time
   */
  static now(): Carbon {
    return new Carbon();
  }

  /**
   * Create a new Carbon instance for today at midnight
   */
  static today(): Carbon {
    const carbon = new Carbon();
    carbon.date.setHours(0, 0, 0, 0);
    return carbon;
  }

  /**
   * Create a new Carbon instance for yesterday at midnight
   */
  static yesterday(): Carbon {
    const carbon = Carbon.today();
    carbon.date.setDate(carbon.date.getDate() - 1);
    return carbon;
  }

  /**
   * Create a new Carbon instance for tomorrow at midnight
   */
  static tomorrow(): Carbon {
    const carbon = Carbon.today();
    carbon.date.setDate(carbon.date.getDate() + 1);
    return carbon;
  }

  /**
   * Get the underlying Date object
   */
  toDate(): Date {
    return new Date(this.date);
  }

  /**
   * Get ISO string representation
   */
  toISOString(): string {
    return this.date.toISOString();
  }

  /**
   * Get string representation
   */
  toString(): string {
    return this.date.toString();
  }

  /**
   * Format the date
   * @param format - Format string (simplified version)
   */
  format(format: string): string {
    // Simple format implementation
    return this.date.toLocaleDateString();
  }

  /**
   * Add days to the date
   */
  addDays(days: number): Carbon {
    this.date.setDate(this.date.getDate() + days);
    return this;
  }

  /**
   * Subtract days from the date
   */
  subDays(days: number): Carbon {
    return this.addDays(-days);
  }

  /**
   * Get the year
   */
  get year(): number {
    return this.date.getFullYear();
  }

  /**
   * Get the month (1-12)
   */
  get month(): number {
    return this.date.getMonth() + 1;
  }

  /**
   * Get the day of month
   */
  get day(): number {
    return this.date.getDate();
  }
}

export default Carbon;
