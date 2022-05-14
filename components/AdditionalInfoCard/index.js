import { StyleSheet, Text, View } from 'react-native';
import Windy from '../../assets/weatherIcons/wind.svg';
import Sunrise from '../../assets/weatherIcons/sunrise.svg';
import Sunset from '../../assets/weatherIcons/sunset.svg';
import Pressure from '../../assets/weatherIcons/pressure.svg';
import Humidity from '../../assets/weatherIcons/humidity.svg';
import UV from '../../assets/weatherIcons/uv.svg';

const AdditionalInfoCard = ({ current }) => {
  return (
    <View style={styles.additionalInfo}>
      <Text style={styles.moreInfo}>Additional info</Text>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Windy />
          <Text style={styles.textWind}>Wind: {current.wind_speed} m/h</Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <Humidity />
          <Text style={styles.textWind}>Humidity: {current.humidity}%</Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Sunrise />
          <Text style={styles.textWind}>
            Sunrise: {getTime(current.sunrise)}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <Sunset />
          <Text style={styles.textWind}>Sunset: {getTime(current.sunset)}</Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Pressure />
          <Text style={styles.textWind}>Press.: {current.pressure} mb</Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <UV />
          <Text style={styles.textWind}>UV: {current.uvi} </Text>
        </View>
      </View>
    </View>
  );
};

const getTime = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const dateObject = new Date(milliseconds);
  const time = dateObject.toString().split(' ');
  return time[4]?.split('').slice(0, 5);
};

const styles = StyleSheet.create({
  additionalInfo: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 30,
  },

  InfoContainerLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  InfoContainerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 35,
  },

  textWind: {
    fontSize: 17,
    color: '#777575',
    marginLeft: 5,
  },

  moreInfo: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    color: '#273365',
  },

  humidity: {
    fontSize: 17,
    color: '#777575',
  },

  infoBlock: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'flex-end',
  },
});

export default AdditionalInfoCard;