import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingLeft: 40,
    paddingRight: 40,
  },

  titleHeader: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#273365',
  },

  //Theme
  light_background: {
    backgroundColor: 'white',
  },
  dark_background: {
    backgroundColor: '#1b1b1b',
  },

  light_text: {
    color: '#273365',
  },
  dark_text: {
    color: 'white',
  },
});

export default styles;
