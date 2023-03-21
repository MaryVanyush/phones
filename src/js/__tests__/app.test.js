import Validator from '../app';

test('check clase Validator', () => {
  const received = new Validator();
  received.validatephoneNumber('8 (927) 000-00-00');
  let expected = { phoneNumber: '+79270000000' };
  expect(received).toEqual(expected);

  received.validatephoneNumber('+7 960 000 00 00');
  expected = { phoneNumber: '+79600000000' };
  expect(received).toEqual(expected);

  received.validatephoneNumber('+86 000 000 0000');
  expected = { phoneNumber: '+860000000000' };
  expect(received).toEqual(expected);
});
