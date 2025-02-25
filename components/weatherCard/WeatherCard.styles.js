import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  temperature_number: {
    fontSize: 90,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  location_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  location: {
    flexDirection: 'column',
    fontSize: 26,
    color: '#818181',
    marginVertical: 0,
    marginLeft: 7,
    marginRight: 10,
    padding: 0,
  },

  feels_like: {
    marginTop: 5,
    fontSize: 16,
    color: '#aaaaaa',
  },

  //Theme
  light_background: {
    backgroundColor: '#f5f5f5',
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

export default styles;
