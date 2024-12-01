import { expect, test } from '@jest/globals';
import { sum, average, median, isEven } from './index.js';

test('sum([1, 2, 3, 4]) = 10', () => {
    expect(sum([1, 2, 3, 4])).toBe(10);
});

test('average([1, 2, 3, 4]) = 2.5', () => {
    expect(average([1, 2, 3, 4])).toBe(2.5);
});

test('average([]) throws ErrorInvalidArgument', () => {
    expect(() => average([])).toThrow('ErrorInvalidArgument');
});

test('median([1, 2, 3, 4, 5]) = 3', () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3);
});

test('median([1, 2, 3, 4]) = 2.5', () => {
    expect(median([1, 2, 3, 4])).toBe(2.5);
});

test('isEven(4) = true', () => {
    expect(isEven(4)).toBe(true);
});

test('isEven(5) = false', () => {
    expect(isEven(5)).toBe(false);
});