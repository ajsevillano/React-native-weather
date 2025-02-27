//Libs
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import getLocation from '@libs/getLocation';
import { ThemeProvider } from '@context/theme';
import { Alert, useColorScheme } from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location';

//Components
import Home from '@screens/Home';
import Onboarding from '@screens/Onboarding';
import LoadingScreen from '@components/LoadingScreen';

export default function App() {
  const [firstLoad, setFirstLoad] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [location, setLocation] = useState('');

  //Default OS theme
  const colorScheme = useColorScheme();

  useEffect(() => {
    const checkFirstTimeUsingApp = async () => {
      // Getting the firstTimeRunningApp of the key `isFirstTime` from the AsyncStorage.
      const firstTimeRunningApp = await AsyncStorage.getItem('isFirstTime');

      //Check if is the first time running the app
      if (!firstTimeRunningApp || firstTimeRunningApp === 'true') {
        setFirstLoad(true);
        setLoaded(true);
      }

      //If is not the first time running the app:
      if (firstTimeRunningApp === 'false') {
        //if the permissions has been remove, request them again.
        let { status } = await Location.requestForegroundPermissionsAsync();
        //If they denied again, show an alert
        status === 'denied' && showAlert();

        //Otherwise, get user location
        if (status === 'granted') {
          setLocation(await getLocation());
          setLoaded(true);
        }
      }
    };
    checkFirstTimeUsingApp();
  }, []);

  const showAlert = () => {
    Alert.alert(
      'Permission denied',
      'Go to settings and allow access to your location for this app to work',
      [
        {
          text: 'Ok',
        },
      ],
    );
  };

  const Stack = createNativeStackNavigator();
  return (
    <ThemeProvider initialTheme={colorScheme}>
      {!isLoaded ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {firstLoad ? (
              <>
                <Stack.Screen name='Onboarding' component={Onboarding} />
                <Stack.Screen name='Home' component={Home} />
              </>
            ) : (
              <Stack.Screen
                name='Home'
                component={Home}
                initialParams={{ location: location }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </ThemeProvider>
  );
}
