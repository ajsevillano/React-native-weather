//Libs
import { StyleSheet, Text, View } from 'react-native';
import { getTime } from '../../libs/getTime';
import getIcons from '../../libs/getIcons';

const Card = ({ item, theme }) => {
  const themeHourlyWeatherCard =
    theme === 'light' ? styles.lightCard : styles.darkCard;

  const temperatureText =
    theme === 'light' ? styles.lightText : styles.darkText;

  return (
    <View style={[styles.hourlyWeatherCard, themeHourlyWeatherCard]}>
      <Text style={[styles.temperatureText, temperatureText]}>
        {item?.temp.toFixed(0)}°
      </Text>
      {getIcons(item?.weather[0].icon, 'small')}
      <Text style={[styles.hour, temperatureText]}>{getTime(item?.dt)}</Text>
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

  lightCard: {
    backgroundColor: '#f5f5f5',
  },

  darkCard: {
    backgroundColor: '#222222',
  },

  temperatureText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  lightText: {
    color: '#273365',
  },

  darkText: {
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
