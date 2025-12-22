/**
 * Carbon - A simple Typescript/Javascript API extension for DateTime
 * Inspired by PHP Carbon
 */

export interface CarbonConfig {
    timezone?: string | null;
}

export type DateInput = string | number | Date | Carbon;

export class Carbon {
    private date: Date;
    private timezone: string | null;

    constructor(date: DateInput | null = null, timezone: string | null = null) {
        this.date = date ? new Date(date instanceof Carbon ? date.toDate() : date) : new Date();
        this.timezone = timezone;

        if (isNaN(this.date.getTime())) {
            throw new Error('Invalid date provided');
        }
    }

    /* --------------------------- Static Constructors -------------------------- */

    static now(timezone: string | null = null): Carbon {
        return new Carbon(null, timezone);
    }

    static today(timezone: string | null = null): Carbon {
        const c = new Carbon(null, timezone);
        c.startOfDay();
        return c;
    }

    static tomorrow(timezone: string | null = null): Carbon {
        return Carbon.today(timezone).addDay();
    }

    static yesterday(timezone: string | null = null): Carbon {
        return Carbon.today(timezone).subDay();
    }

    static parse(dateString: string, timezone: string | null = null): Carbon {
        return new Carbon(dateString, timezone);
    }

    static create(
        year: number,
        month: number = 1,
        day: number = 1,
        hour: number = 0,
        minute: number = 0,
        second: number = 0,
        timezone: string | null = null
    ): Carbon {
        const date = new Date(year, month - 1, day, hour, minute, second);
        return new Carbon(date, timezone);
    }

    static createFromFormat(
        format: string,
        dateString: string,
        timezone: string | null = null
    ): Carbon {
        const date = new Date(dateString);
        return new Carbon(date, timezone);
    }

    static createFromTimestamp(timestamp: number, timezone: string | null = null): Carbon {
        return new Carbon(timestamp * 1000, timezone);
    }

    /* --------------------------------- Getters -------------------------------- */

    get year(): number {
        return this.date.getFullYear();
    }

    get month(): number {
        return this.date.getMonth() + 1;
    }

    get day(): number {
        return this.date.getDate();
    }

    get hour(): number {
        return this.date.getHours();
    }

    get minute(): number {
        return this.date.getMinutes();
    }

    get second(): number {
        return this.date.getSeconds();
    }

    get millisecond(): number {
        return this.date.getMilliseconds();
    }

    get dayOfWeek(): number {
        return this.date.getDay();
    }

    get dayOfYear(): number {
        const start = new Date(this.year, 0, 0);
        const diff = this.date.getTime() - start.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    get weekOfYear(): number {
        const d = new Date(Date.UTC(this.year, this.month - 1, this.day));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    }

    get daysInMonth(): number {
        return new Date(this.year, this.month, 0).getDate();
    }

    get timestamp(): number {
        return Math.floor(this.date.getTime() / 1000);
    }

    /* --------------------------------- Setters -------------------------------- */

    setYear(year: number): this {
        this.date.setFullYear(year);
        return this;
    }

    setMonth(month: number): this {
        this.date.setMonth(month - 1);
        return this;
    }

    setDay(day: number): this {
        this.date.setDate(day);
        return this;
    }

    setHour(hour: number): this {
        this.date.setHours(hour);
        return this;
    }

    setMinute(minute: number): this {
        this.date.setMinutes(minute);
        return this;
    }

    setSecond(second: number): this {
        this.date.setSeconds(second);
        return this;
    }

    /* ------------------------------- Add Methods ------------------------------ */

    addYears(years: number): this {
        this.date.setFullYear(this.date.getFullYear() + years);
        return this;
    }

    addYear(): this {
        return this.addYears(1);
    }

    addMonths(months: number): this {
        this.date.setMonth(this.date.getMonth() + months);
        return this;
    }

    addMonth(): this {
        return this.addMonths(1);
    }

    addDays(days: number): this {
        this.date.setDate(this.date.getDate() + days);
        return this;
    }

    addDay(): this {
        return this.addDays(1);
    }

    addWeeks(weeks: number): this {
        return this.addDays(weeks * 7);
    }

    addWeek(): this {
        return this.addWeeks(1);
    }

    addHours(hours: number): this {
        this.date.setHours(this.date.getHours() + hours);
        return this;
    }

    addHour(): this {
        return this.addHours(1);
    }

    addMinutes(minutes: number): this {
        this.date.setMinutes(this.date.getMinutes() + minutes);
        return this;
    }

    addMinute(): this {
        return this.addMinutes(1);
    }

    addSeconds(seconds: number): this {
        this.date.setSeconds(this.date.getSeconds() + seconds);
        return this;
    }

    addSecond(): this {
        return this.addSeconds(1);
    }

    /* ---------------------------- Subtract Methods ---------------------------- */

    subYears(years: number): this {
        return this.addYears(-years);
    }

    subYear(): this {
        return this.subYears(1);
    }

    subMonths(months: number): this {
        return this.addMonths(-months);
    }

    subMonth(): this {
        return this.subMonths(1);
    }

    subDays(days: number): this {
        return this.addDays(-days);
    }

    subDay(): this {
        return this.subDays(1);
    }

    subWeeks(weeks: number): this {
        return this.addWeeks(-weeks);
    }

    subWeek(): this {
        return this.subWeeks(1);
    }

    subHours(hours: number): this {
        return this.addHours(-hours);
    }

    subHour(): this {
        return this.subHours(1);
    }

    subMinutes(minutes: number): this {
        return this.addMinutes(-minutes);
    }

    subMinute(): this {
        return this.subMinutes(1);
    }

    subSeconds(seconds: number): this {
        return this.addSeconds(-seconds);
    }

    subSecond(): this {
        return this.subSeconds(1);
    }

    /* ---------------------------- Start/End Methods --------------------------- */

    startOfDay(): this {
        this.date.setHours(0, 0, 0, 0);
        return this;
    }

    endOfDay(): this {
        this.date.setHours(23, 59, 59, 999);
        return this;
    }

    startOfMonth(): this {
        this.date.setDate(1);
        this.startOfDay();
        return this;
    }

    endOfMonth(): this {
        this.date.setMonth(this.date.getMonth() + 1, 0);
        this.endOfDay();
        return this;
    }

    startOfYear(): this {
        this.date.setMonth(0, 1);
        this.startOfDay();
        return this;
    }

    endOfYear(): this {
        this.date.setMonth(11, 31);
        this.endOfDay();
        return this;
    }

    startOfWeek(): this {
        const day = this.date.getDay();
        const diff = this.date.getDate() - day + (day === 0 ? -6 : 1);
        this.date.setDate(diff);
        this.startOfDay();
        return this;
    }

    endOfWeek(): this {
        this.startOfWeek();
        this.addDays(6);
        this.endOfDay();
        return this;
    }

    /* --------------------------- Comparison Methods --------------------------- */

    isSameDay(other: DateInput): boolean {
        const otherDate = other instanceof Carbon ? other.date : new Date(other);
        return this.date.toDateString() === otherDate.toDateString();
    }

    isSameMonth(other: DateInput): boolean {
        const otherDate = other instanceof Carbon ? other.date : new Date(other);
        return this.year === otherDate.getFullYear() && this.month === otherDate.getMonth() + 1;
    }

    isSameYear(other: DateInput): boolean {
        const otherDate = other instanceof Carbon ? other.date : new Date(other);
        return this.year === otherDate.getFullYear();
    }

    isToday(): boolean {
        return this.isSameDay(new Date());
    }

    isTomorrow(): boolean {
        return this.isSameDay(Carbon.tomorrow().date);
    }

    isYesterday(): boolean {
        return this.isSameDay(Carbon.yesterday().date);
    }

    isFuture(): boolean {
        return this.date > new Date();
    }

    isPast(): boolean {
        return this.date < new Date();
    }

    isLeapYear(): boolean {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }

    isWeekday(): boolean {
        return this.dayOfWeek > 0 && this.dayOfWeek < 6;
    }

    isWeekend(): boolean {
        return this.dayOfWeek === 0 || this.dayOfWeek === 6;
    }

    isBefore(other: DateInput): boolean {
        const otherDate = other instanceof Carbon ? other.date : new Date(other);
        return this.date < otherDate;
    }

    isAfter(other: DateInput): boolean {
        const otherDate = other instanceof Carbon ? other.date : new Date(other);
        return this.date > otherDate;
    }

    isBetween(start: DateInput, end: DateInput, inclusive: boolean = true): boolean {
        const startDate = start instanceof Carbon ? start.date : new Date(start);
        const endDate = end instanceof Carbon ? end.date : new Date(end);

        if (inclusive) {
            return this.date >= startDate && this.date <= endDate;
        }
        return this.date > startDate && this.date < endDate;
    }

    /* --------------------------- Difference Methods --------------------------- */

    diffInYears(other: DateInput | null = null): number {
        const otherDate = other ? (other instanceof Carbon ? other.date : new Date(other)) : new Date();
        return Math.floor((this.date.getTime() - otherDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
    }

    diffInMonths(other: DateInput | null = null): number {
        const otherDate = other ? (other instanceof Carbon ? other.date : new Date(other)) : new Date();
        return (this.year - otherDate.getFullYear()) * 12 + (this.month - (otherDate.getMonth() + 1));
    }

    diffInDays(other: DateInput | null = null): number {
        const otherDate = other ? (other instanceof Carbon ? other.date : new Date(other)) : new Date();
        return Math.floor((this.date.getTime() - otherDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    diffInHours(other: DateInput | null = null): number {
        const otherDate = other ? (other instanceof Carbon ? other.date : new Date(other)) : new Date();
        return Math.floor((this.date.getTime() - otherDate.getTime()) / (1000 * 60 * 60));
    }

    diffInMinutes(other: DateInput | null = null): number {
        const otherDate = other ? (other instanceof Carbon ? other.date : new Date(other)) : new Date();
        return Math.floor((this.date.getTime() - otherDate.getTime()) / (1000 * 60));
    }

    diffInSeconds(other: DateInput | null = null): number {
        const otherDate = other ? (other instanceof Carbon ? other.date : new Date(other)) : new Date();
        return Math.floor((this.date.getTime() - otherDate.getTime()) / 1000);
    }

    diffForHumans(other: DateInput | null = null): string {
        const diff = this.diffInSeconds(other);
        const absDiff = Math.abs(diff);
        const isPast = diff < 0;

        let value: number, unit: string;
        if (absDiff < 60) {
            value = absDiff;
            unit = 'second';
        } else if (absDiff < 3600) {
            value = Math.floor(absDiff / 60);
            unit = 'minute';
        } else if (absDiff < 86400) {
            value = Math.floor(absDiff / 3600);
            unit = 'hour';
        } else if (absDiff < 2592000) {
            value = Math.floor(absDiff / 86400);
            unit = 'day';
        } else if (absDiff < 31536000) {
            value = Math.floor(absDiff / 2592000);
            unit = 'month';
        } else {
            value = Math.floor(absDiff / 31536000);
            unit = 'year';
        }

        const plural = value !== 1 ? 's' : '';
        return isPast ? `${value} ${unit}${plural} ago` : `in ${value} ${unit}${plural}`;
    }

    /* --------------------------- Formatting Methods --------------------------- */

    format(formatStr: string): string {
        const pad = (n: number): string => n.toString().padStart(2, '0');
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const replacements: Record<string, string | number> = {
            'Y': this.year,
            'y': this.year.toString().slice(-2),
            'F': monthNames[this.month - 1],
            'M': monthNames[this.month - 1].slice(0, 3),
            'm': pad(this.month),
            'n': this.month,
            'd': pad(this.day),
            'j': this.day,
            'l': dayNames[this.dayOfWeek],
            'D': dayNames[this.dayOfWeek].slice(0, 3),
            'H': pad(this.hour),
            'h': pad(this.hour % 12 || 12),
            'G': this.hour,
            'g': this.hour % 12 || 12,
            'i': pad(this.minute),
            's': pad(this.second),
            'A': this.hour >= 12 ? 'PM' : 'AM',
            'a': this.hour >= 12 ? 'pm' : 'am'
        };

        return formatStr.replace(/[YyFMmndlDHhGgisAa]/g, match => String(replacements[match] || match));
    }

    toDateString(): string {
        return this.format('Y-m-d');
    }

    toTimeString(): string {
        return this.format('H:i:s');
    }

    toDateTimeString(): string {
        return this.format('Y-m-d H:i:s');
    }

    toISOString(): string {
        return this.date.toISOString();
    }

    toString(): string {
        return this.toDateTimeString();
    }

    toJSON(): string {
        return this.toISOString();
    }

    toDate(): Date {
        return new Date(this.date);
    }

    /* ----------------------------- Utility Methods ---------------------------- */

    copy(): Carbon {
        return new Carbon(this.date, this.timezone);
    }

    clone(): Carbon {
        return this.copy();
    }
}

export default Carbon;
