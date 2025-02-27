import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  hourlyWeatherCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 20,
  },

  temperatureText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  hour: {
    marginTop: 15,
  },

  now: {
    fontWeight: '700',
  },
});

export default styles;
