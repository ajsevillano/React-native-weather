//Libs
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location';

//Components
import Home from './screens/Home';
import Onboarding from './screens/Onboarding';

export default function App() {
  const [firstLoad, setFirstLoad] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const checkFirstTimeUsingApp = async () => {
      /* Getting the value of the key `isFirstTime` from the AsyncStorage. */
      const value = await AsyncStorage.getItem('isFirstTime');
      const userLocation = await getUserLocation();
      setLocation(userLocation);

      value === null && setFirstLoad(true), setLoaded(true);
      value === 'false' && setFirstLoad(false), setLoaded(true);
      value === 'true' && setFirstLoad(true), setLoaded(true);
    };

    checkFirstTimeUsingApp();
  }, []);

  const getUserLocation = async () => {
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
      maximumAge: 10000,
    });
    return location;
  };

  if (!isLoaded) return null;

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {firstLoad ? (
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen
              name="Home"
              component={Home}
              initialParams={{ age: location }}
            />
          </>
        ) : (
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{ age: location }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
