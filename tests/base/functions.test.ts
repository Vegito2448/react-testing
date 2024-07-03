import { getActiveUser, getUser } from '../../src/base';

describe('testing base functions', () => {
  test('getUser should return an object', () => {
    const user = getUser();
    const expected = { uid: 'ABC123', username: 'Vegito2448' };

    expect(user).toEqual(expected);
  });

  test('getActiveUser should return an object with the name passed as argument', () => {
    const name = 'Jesús';
    const user = getActiveUser(name);
    const expected = { uid: 'ABC567', username: name };

    expect(user).toEqual(expected);
  });
});
