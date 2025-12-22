import Carbon from '../src/index';

describe('Carbon', () => {
    test('creates instance', () => {
        const carbon = Carbon.now();
        expect(carbon).toBeInstanceOf(Carbon);
    });

    test('formats date', () => {
        const carbon = Carbon.create(2024, 12, 25, 10, 30, 0);
        expect(carbon.format('Y-m-d')).toBe('2024-12-25');
    });

    test('adds days', () => {
        const carbon = Carbon.create(2024, 12, 25);
        carbon.addDays(5);
        expect(carbon.day).toBe(30);
    });

    test('checks if today', () => {
        const carbon = Carbon.today();
        expect(carbon.isToday()).toBe(true);
    });
});
