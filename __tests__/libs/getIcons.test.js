import AsyncStorage from '@react-native-async-storage/async-storage';

const checkFirstTimeUsingApp = async () => {
  // Getting the firstTimeRunningApp of the key `isFirstTime` from the AsyncStorage.
  await AsyncStorage.getItem('isFirstTime');
};

it('checks if Async Storage is used', async () => {
  await checkFirstTimeUsingApp();

  expect(AsyncStorage.getItem).toBeCalledWith('isFirstTime');
});
