import getTheme from '../../libs/getTheme';

describe('Test the function that returns the style for the current theme', () => {
  it(`Given a style and light theme, return a new style based on the theme`, () => {
    const actual = getTheme('text', 'light');
    const expected = ['light_text'];
    expect(actual).toStrictEqual(expected);
  });
  it(`Given a style and dark theme, return a new style based on the theme`, () => {
    const actual = getTheme('text', 'dark');
    const expected = ['dark_text'];
    expect(actual).toStrictEqual(expected);
  });
});
