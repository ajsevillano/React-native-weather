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

  light_background: {
    backgroundColor: '#f5f5f5',
  },

  dark_background: {
    backgroundColor: '#222222',
  },

  temperatureText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  light_text: {
    color: '#273365',
  },

  dark_text: {
    color: 'white',
  },

  hour: {
    marginTop: 15,
  },

  now: {
    fontWeight: '700',
  },
});

export default styles;
