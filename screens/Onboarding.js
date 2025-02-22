//Libs
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import getLocation from '../libs/getLocation';
import getTheme from '../libs/getTheme';

//Context
import { useContext } from 'react';
import ThemeContext from '../context/theme';

//Components
import Button from '../components/Button';

//SVG
import OnboardingImg from '../assets/onboardingImage.svg';
import OnboardingImgDark from '../assets/onboardingImageDark.svg';

const Onboarding = ({ navigation }) => {
  //Theme from Context
  const theme = useContext(ThemeContext);
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
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={[styles.container, styles[getTheme('background', theme)]]}>
      <StatusBar hidden={true} />
      {/* <View style={styles.imgContainer}>
        {theme === 'light' ? <OnboardingImg /> : <OnboardingImgDark />}
      </View> */}
      <View style={styles.bottonContainer}>
        <Text style={[styles.welcomeHeader, styles[getTheme('text', theme)]]}>
          Welcome to minimal weather
        </Text>
        <Text style={styles.welcomeText}>
          Before start you need to grant permission to enable location on your
          phone
        </Text>
        <Button
          handleOnPress={fetchUserLocation}
          loading={buttonIsLoading}
          buttonText="Get started"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
  },

  imgContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeHeader: {
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
  },

  welcomeText: {
    color: '#818181',
    paddingHorizontal: 60,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 20,
  },

  //Theme
  light_background: {
    backgroundColor: 'white',
  },

  dark_background: {
    backgroundColor: '#222222',
  },

  light_text: {
    color: '#273365',
  },

  dark_text: {
    color: 'white',
  },
});

export default Onboarding;
