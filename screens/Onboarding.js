import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OnboardingImg from '../assets/onboardingImage.svg';

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.imgContainer}>
        <OnboardingImg />
      </View>
      <View style={styles.bottonContainer}>
        <Text style={styles.welcomeHeader}>Welcome to minimal weather</Text>
        <Text style={styles.welcomeText}>
          Before start you need to grand permission to enable location on your
          phone
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
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
});

export default Onboarding;
