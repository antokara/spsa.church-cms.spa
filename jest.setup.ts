import * as fetchMock from 'fetch-mock';

// throw on console.warn/error
// to force the failure of the test(s)
const { warn } = global.console;
global.console.warn = (...args: Error[] | string[]): void => {
  warn.apply(console, args);
  if (args[0] instanceof Error) {
    throw args[0];
  }
  if (typeof args[0] === 'string') {
    throw new Error(args[0]);
  }
};
const { error } = global.console;
global.console.error = (...args: Error[] | string[]): void => {
  error.apply(console, args);
  if (args[0] instanceof Error) {
    throw args[0];
  }
  if (typeof args[0] === 'string') {
    throw new Error(args[0]);
  }
};

/**
 * we need to mock fetch because it is not available in NodeJS and
 * because of that, some tests fail.
 *
 * That includes ie. the App container, which uses the GraphQL provider.
 * Not just tests that directly depend on fetch...
 *
 * @see http://www.wheresrhys.co.uk/fetch-mock/#aboutintroduction
 */
fetchMock.mock();
