//Libs
import { Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import getLocation from '@libs/getLocation';

//Context
import { useContext } from 'react';
import ThemeContext from '@context/theme';

//Components
import Button from '@components/Button';
import LightImage from '@components/Svgs/Onboarding/LightImage';
import DarkImage from '@components/Svgs/Onboarding/DarkImage';

// Styles
import styles from './Onboarding.styles';

const Onboarding = ({ navigation }) => {
  //Theme from Context
  const { theme } = useContext(ThemeContext);
  const [buttonIsLoading, setButtonIsLoading] = useState(false);
  const fetchUserLocation = async () => {
    setButtonIsLoading(true);
    /* Asking for permission to access the user's location. */
    let { status } = await Location.requestForegroundPermissionsAsync();
    /* Check permission status */
    if (status === 'denied') {
      showAlert();
      setButtonIsLoading(false);
    }
    if (status === 'granted') {
      const userLocation = await getLocation();
      setAsyncStorage();
      setButtonIsLoading(false);
      navigation.navigate('Home', {
        location: userLocation,
      });
    }
  };

  const setAsyncStorage = async () => {
    await AsyncStorage.setItem('isFirstTime', 'false');
  };

  const showAlert = () => {
    Alert.alert(
      'Permission denied',
      'This app needs access to your location to show the weather in your area',
      [{ text: 'OK' }],
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background.primary }]}>
      <StatusBar hidden={true} />
      <View style={styles.imgContainer}>
        {theme.background.primary === 'white' ? <LightImage /> : <DarkImage />}
      </View>
      <View style={styles.bottonContainer}>
        <Text style={[styles.welcomeHeader, { color: theme.text }]}>
          Welcome to minimal weather
        </Text>
        <Text style={styles.welcomeText}>
          Before start you need to grant permission to enable location on your phone
        </Text>
        <Button
          handleOnPress={fetchUserLocation}
          loading={buttonIsLoading}
          buttonText='Get started'
        />
      </View>
    </View>
  );
};

export default Onboarding;
