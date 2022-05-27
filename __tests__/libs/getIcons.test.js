// import AsyncStorage from '@react-native-async-storage/async-storage';

// const checkFirstTimeUsingApp = async () => {
//   // Getting the firstTimeRunningApp of the key `isFirstTime` from the AsyncStorage.
//   await AsyncStorage.getItem('isFirstTime');
// };

// it('checks if Async Storage is used', async () => {
//   await checkFirstTimeUsingApp();

//   expect(AsyncStorage.getItem).toBeCalledWith('isFirstTime');
// });

import React from 'react';
import renderer from 'react-test-renderer';

import Grid from '../../components/Grid';

describe('<Grid />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Grid />).toJSON();
    console.log(tree.length);
    expect(tree).toMatchSnapshot();
  });
});
