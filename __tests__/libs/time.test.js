import { getTime, formatedTime } from '../../libs/getTime';

it(`Given a timestamp return the date in HH:MM format`, () => {
  const timeStamp = 1653685200;
  const actual = formatedTime(timeStamp);
  const expected = '22:00';

  expect(actual).toBe(expected);
});

it(`Given a string instead of a number, return undefined`, () => {
  const timeStamp = 'wrongDate';
  const actual = getTime(timeStamp);
  const expected = 'ERROR';

  expect(actual).toBe(expected);
});
