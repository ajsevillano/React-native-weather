//Libs
import { StyleSheet, Text, View } from 'react-native';
import { getTime } from '../../../libs/getTime';
import getIcons from '../../../libs/getIcons';

const HourlyWeatherCard = ({ item, index }) => {
  return (
    <View style={styles.hourlyWeatherCard}>
      <Text style={styles.temperatureText}>{item?.temp.toFixed(0)}°</Text>
      {console.log(item?.weather[0].icon)}
      {getIcons(item?.weather[0].icon, 'small')}
      <Text style={styles.hour}>
        {index === 0 ? <Text style={styles.now}>NOW</Text> : getTime(item?.dt)}
      </Text>
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

  now: {
    fontWeight: '700',
  },
});

export default HourlyWeatherCard;
