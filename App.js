//Libs
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

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

      //First time running the app
      if (value === null || value === true) {
        setFirstLoad(true);
        setLoaded(true);
      }

      //If is not the first time running the app:
      if (value === 'false') {
        let { status } = await Location.requestForegroundPermissionsAsync();
        //if for any reason the user remove the location permisson, show an alert
        if (status !== 'granted') {
          showAlert();
        }
        //Otherwise
        if (status === 'granted') {
          const userLocation = await getUserLocation();
          //Set firstLoad on false if this is the first time launching the app
          setLocation(userLocation);
          setLoaded(true);
        }
      }
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

  const showAlert = () => {
    Alert.alert(
      'Permission denied',
      'Go to settings and allow access to your location for this app to work',
      [
        {
          text: 'Ok',
        },
      ]
    );
  };

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
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{ location: location }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
