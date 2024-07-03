import { sayHello } from '../../src/base';

describe('testing template string', () => {
  test("sayHello should return 'Hola Jesús'", () => {
    const name = 'Jesús';

    const result = sayHello(name);

    expect(result).toBe('Hola Jesús');
  });

  test("sayHello should return 'Hola '", () => {
    const result = sayHello();

    expect(result).toBe('Hola ');
  });
});
