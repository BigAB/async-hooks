const AsyncHooks = require('..');

test('useAsync should return 42', () => {
  expect(AsyncHooks.useAsync()).toBe(42);
});
