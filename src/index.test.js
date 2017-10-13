import numbersOnly from './index';

describe('numbersOnly()', () => {
  it('does not allow the user to hit the shift key', () => {
    const e = {
      shiftKey: true,
      which: 42,
      preventDefault: jest.fn(() => {}),
    };

    expect(numbersOnly(e)).toEqual(false);
  });

  it('does not allow the user to enter in anything but numbers', () => {
    const e = {
      shiftKey: false,
      which: 200,
      preventDefault: jest.fn(() => {}),
    };

    expect(numbersOnly(e)).toEqual(false);
  });

  it('allows the user to use the delete key', () => {
    const e = {
      shiftKey: false,
      which: 8,
      preventDefault: jest.fn(() => {}),
    };

    expect(numbersOnly(e)).toEqual(true);
  });

  it('allows the user to use the tab key', () => {
    const e = {
      shiftKey: false,
      which: 9,
      preventDefault: jest.fn(() => {}),
    };

    expect(numbersOnly(e)).toEqual(true);
  });

  it('allows the user to use the left arrow key', () => {
    const e = {
      shiftKey: false,
      which: 37,
      preventDefault: jest.fn(() => {}),
    };

    expect(numbersOnly(e)).toEqual(true);
  });

  it('allows the user to use the right arrow key', () => {
    const e = {
      shiftKey: false,
      which: 39,
      preventDefault: jest.fn(() => {}),
    };

    expect(numbersOnly(e)).toEqual(true);
  });

  it('allows the user to enter a keyboard number', () => {
    const e = {
      shiftKey: false,
      which: 50,
      preventDefault: jest.fn(() => {}),
    };

    expect(numbersOnly(e)).toEqual(true);
  });

  it('allows the user to enter a numpad number', () => {
    const e = {
      shiftKey: false,
      which: 100,
      preventDefault: jest.fn(() => {}),
    };

    expect(numbersOnly(e)).toEqual(true);
  });
});
