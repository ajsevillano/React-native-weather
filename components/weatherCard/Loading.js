import Svg, { Circle } from 'react-native-svg';
import { StyleSheet, Text } from 'react-native';

const Loading = ({ theme, getTheme }) => {
  return (
    <>
      <Svg height="88" width="88">
        <Circle
          cx="40"
          cy="40"
          r="40"
          fill={theme === 'light' ? '#eaeaea' : '#414141'}
        />
      </Svg>
      <Text style={getTheme('text')}>Loading</Text>
      <Text style={[styles.temperature_number, getTheme('text')]}>--°</Text>
      <Text style={[styles.location, getTheme('text')]}>Loading</Text>
      <Text style={[styles.feels_like, getTheme('text')]}>
        Feels like: Loading
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  temperature_number: {
    fontSize: 90,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  location: {
    fontSize: 26,
    color: '#818181',
    margin: 0,
    padding: 0,
  },

  feels_like: {
    marginTop: 5,
    fontSize: 16,
    color: '#aaaaaa',
  },
});

export default Loading;