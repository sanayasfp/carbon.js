/**
 * Carbon - A simple DateTime API extension
 */
export class Carbon {
  private date: Date;

  constructor(date?: Date | string | number) {
    if (date instanceof Date) {
      this.date = new Date(date);
    } else if (date) {
      this.date = new Date(date);
    } else {
      this.date = new Date();
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
   * Create a new Carbon instance for tomorrow at midnight
   */
  static tomorrow(): Carbon {
    const carbon = Carbon.today();
    carbon.date.setDate(carbon.date.getDate() + 1);
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
   * Create a Carbon instance from a specific date
   */
  static parse(date: Date | string | number): Carbon {
    return new Carbon(date);
  }

  /**
   * Add days to the current date
   */
  addDays(days: number): Carbon {
    this.date.setDate(this.date.getDate() + days);
    return this;
  }

  /**
   * Subtract days from the current date
   */
  subDays(days: number): Carbon {
    this.date.setDate(this.date.getDate() - days);
    return this;
  }

  /**
   * Add months to the current date
   */
  addMonths(months: number): Carbon {
    this.date.setMonth(this.date.getMonth() + months);
    return this;
  }

  /**
   * Subtract months from the current date
   */
  subMonths(months: number): Carbon {
    this.date.setMonth(this.date.getMonth() - months);
    return this;
  }

  /**
   * Add years to the current date
   */
  addYears(years: number): Carbon {
    this.date.setFullYear(this.date.getFullYear() + years);
    return this;
  }

  /**
   * Subtract years from the current date
   */
  subYears(years: number): Carbon {
    this.date.setFullYear(this.date.getFullYear() - years);
    return this;
  }

  /**
   * Format the date as a string
   */
  format(formatString: string = 'YYYY-MM-DD HH:mm:ss'): string {
    const year = this.date.getFullYear();
    const month = String(this.date.getMonth() + 1).padStart(2, '0');
    const day = String(this.date.getDate()).padStart(2, '0');
    const hours = String(this.date.getHours()).padStart(2, '0');
    const minutes = String(this.date.getMinutes()).padStart(2, '0');
    const seconds = String(this.date.getSeconds()).padStart(2, '0');

    return formatString
      .replace('YYYY', String(year))
      .replace('MM', month)
      .replace('DD', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
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
   * Get the timestamp in milliseconds
   */
  valueOf(): number {
    return this.date.valueOf();
  }

  /**
   * Clone the current Carbon instance
   */
  clone(): Carbon {
    return new Carbon(this.date);
  }

  /**
   * Check if the date is before another date
   */
  isBefore(other: Carbon | Date): boolean {
    const otherDate = other instanceof Carbon ? other.toDate() : other;
    return this.date < otherDate;
  }

  /**
   * Check if the date is after another date
   */
  isAfter(other: Carbon | Date): boolean {
    const otherDate = other instanceof Carbon ? other.toDate() : other;
    return this.date > otherDate;
  }

  /**
   * Check if the date is the same as another date
   */
  isSame(other: Carbon | Date): boolean {
    const otherDate = other instanceof Carbon ? other.toDate() : other;
    return this.date.getTime() === otherDate.getTime();
  }
}

export default Carbon;
