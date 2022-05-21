//Libs
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getTime } from '../../../libs/time';
import { getWeatherIcon } from '../../../libs/getIcons';

const HourlyWeatherCard = ({ item }) => {
  return (
    <View style={styles.hourlyWeatherCard}>
      <Text style={styles.temperatureText}>{item.temp.toFixed(0)}°</Text>
      {getWeatherIcon(item.weather, 'small')}
      <Text style={styles.hour}>{getTime(item.dt)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hourlyWeatherCard: {
    // flexDirection: 'column',
    alignItems: 'center',
    // paddingLeft: 18,
    // paddingRight: 18,
    // paddingBottom: 16,
    // paddingTop: 16,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    marginRight: 20,
  },

  temperatureText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#273365',
    marginBottom: 15,
  },

  hour: {
    marginTop: 15,
    color: '#273365',
  },
});

export default HourlyWeatherCard;
