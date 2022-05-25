//Libs
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import getLocation from '../libs/getLocation';

//SVG
import OnboardingImg from '../assets/onboardingImage.svg';

const Onboarding = ({ navigation }) => {
  const [buttonState, setButtonState] = useState(false);
  const fetchUserLocation = async () => {
    setButtonState(true);
    /* Asking for permission to access the user's location. */
    let { status } = await Location.requestForegroundPermissionsAsync();
    /* Check permission status */
    if (status === 'denied') {
      showAlert();
      setButtonState(false);
    }
    if (status === 'granted') {
      const userLocation = await getLocation();
      setAsyncStorage();
      setButtonState(false);
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
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.imgContainer}>
        <OnboardingImg />
      </View>
      <View style={styles.bottonContainer}>
        <Text style={styles.welcomeHeader}>Welcome to minimal weather</Text>
        <Text style={styles.welcomeText}>
          Before start you need to grant permission to enable location on your
          phone
        </Text>
        <TouchableOpacity style={styles.button} onPress={fetchUserLocation}>
          {buttonState && (
            <>
              <ActivityIndicator
                style={styles.activityIndicator}
                size="small"
                color="#273365"
              />
              <Text style={styles.buttonText}>Loading</Text>
            </>
          )}
          {!buttonState && <Text style={styles.buttonText}>Get started</Text>}
        </TouchableOpacity>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottonContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeHeader: {
    color: '#273365',
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

  button: {
    flexDirection: 'row',
    backgroundColor: '#ffbf00',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 70,
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: '#273365',
    fontSize: 25,
    fontWeight: '700',
  },

  activityIndicator: {
    marginRight: 10,
  },
});

export default Onboarding;
