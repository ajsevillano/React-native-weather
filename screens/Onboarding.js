import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import OnboardingImg from '../assets/onboardingImage.svg';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onboarding = ({ navigation }) => {
  const defaultButtonState = <Text style={styles.buttonText}>Get started</Text>;
  const [buttonMsg, setButtonMsg] = useState(defaultButtonState);
  const fetchUserLocation = async () => {
    setButtonMsg(
      <>
        <ActivityIndicator
          style={styles.activityIndicator}
          size="small"
          color="#273365"
        />
        <Text style={styles.buttonText}>Loading</Text>
      </>
    );
    /* Asking for permission to access the user's location. */
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Permission denied',
        'This app needs access to your location to show the weather in your area',
        [{ text: 'OK' }]
      );
      setButtonMsg(defaultButtonState);
    } else {
      /* Getting the user's location. */
      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        maximumAge: 10000,
      });
      setStringValue();
      setButtonMsg(defaultButtonState);
      navigation.navigate('Home');
    }
  };

  const setStringValue = async () => {
    try {
      await AsyncStorage.setItem('isFirstTime', 'no');
    } catch (e) {
      // save error
    }
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
          {buttonMsg}
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
