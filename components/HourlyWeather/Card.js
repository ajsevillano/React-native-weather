//Libs
import { StyleSheet, Text, View } from 'react-native';
import getIcons from '../../libs/getIcons';
import getTheme from '../../libs/getTheme';

//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';

const Card = ({ item }) => {
  const time = item?.time.split(' ')[1];
  const theme = useContext(ThemeContext);
  return (
    <View style={[styles.hourlyWeatherCard, styles[getTheme('background', theme)]]}>
      <Text style={[styles.temperatureText, styles[getTheme('text', theme)]]}>
        {item?.temperature.toFixed(0)}°
      </Text>
      {getIcons(item?.iconCode, item?.isDay, 'small')}
      <Text style={[styles.hour, styles[getTheme('text', theme)]]}>{time}</Text>
    </View>
  );
};

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

export default Card;
