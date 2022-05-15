//It takes a timestamp  and returns the time in the format of HH:MM.
export const getTime = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const time = dateObject.toString().split(' ');
  return time[4]?.split('').slice(0, 5);
};
