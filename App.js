//Libs
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Components
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';

export default function App() {
  const [firstLoad, setFirstLoad] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const checkFirstTimeUsingApp = async () => {
      /* Getting the value of the key `isFirstTime` from the AsyncStorage. */
      const value = await AsyncStorage.getItem('isFirstTime');

      value === null && setFirstLoad(true), setLoaded(true);
      value === 'false' && setFirstLoad(false), setLoaded(true);
      value === 'true' && setFirstLoad(true), setLoaded(true);
    };
    checkFirstTimeUsingApp();
  }, []);

  if (!isLoaded) return null;

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {firstLoad ? (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
