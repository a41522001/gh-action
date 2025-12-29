import { describe, it, expect, test } from 'vitest';
import { sum } from '@/utils';
describe('add', () => {
  test('add1', () => {
    expect(sum(3, 5)).toBe(8);
  });
  test('add2', () => {
    expect(sum(-5, 5)).toBe(5);
  });
});
