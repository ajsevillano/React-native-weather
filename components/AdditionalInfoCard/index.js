//Libs
import { StyleSheet, Text, View } from 'react-native';
import { getTime } from '../../libs/time';
//SVG Icons
import Windy from '../../assets/additionalInfo/wind.svg';
import Sunrise from '../../assets/additionalInfo/sunrise.svg';
import Sunset from '../../assets/additionalInfo/sunset.svg';
import Pressure from '../../assets/additionalInfo/pressure.svg';
import Humidity from '../../assets/additionalInfo/humidity.svg';
import UV from '../../assets/additionalInfo/uv.svg';

const AdditionalInfoCard = ({ current }) => {
  return (
    <View style={styles.additionalInfo}>
      <Text style={styles.moreInfo}>Additional info</Text>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Windy />
          <Text style={styles.textWind}>
            Wind: {!current ? '- - m/h' : `${current.wind_speed}m/h`}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <Humidity />
          <Text style={styles.textWind}>
            Humidity: {!current ? '- -%' : `${current.humidity}%`}
          </Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Sunrise />
          <Text style={styles.textWind}>
            Sunrise: {!current ? '--:--' : getTime(current.sunrise)}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <Sunset />
          <Text style={styles.textWind}>
            Sunset: {!current ? '--:--' : getTime(current.sunset)}
          </Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Pressure />
          <Text style={styles.textWind}>
            Press.: {!current ? '- -  mb' : `${current.pressure} mb`}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <UV />
          <Text style={styles.textWind}>
            UV: {!current ? '- -' : `${current.uvi}`}
          </Text>
        </View>
      </View>
    </View>
  );
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
