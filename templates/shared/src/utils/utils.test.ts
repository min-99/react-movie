import { hello } from './index';

describe('first', () => {
  it('hello', () => {
    expect(hello()).toBe('hello');
  });
});
