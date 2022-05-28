//Libs
import { StyleSheet, Text, View } from 'react-native';
import { getTime } from '../../libs/getTime';
//SVG Icons
import Sunrise from '../../assets/additionalInfo/sunrise.svg';
import Sunset from '../../assets/additionalInfo/sunset.svg';
import Pressure from '../../assets/additionalInfo/pressure.svg';
import Humidity from '../../assets/additionalInfo/humidity.svg';
import UV from '../../assets/additionalInfo/uv.svg';
import Windy from '../Svgs/Windy';

const AdditionalInfoCard = ({ current, loading }) => {
  return (
    <View style={styles.additionalInfoContainer}>
      <Text style={styles.moreInfo}>Additional info</Text>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Windy />
          <Text style={styles.textWind}>
            Wind:{' '}
            {loading ? (
              '- - m/h'
            ) : (
              <Text style={styles.boldData}>{`${current?.wind_speed}m/h`}</Text>
            )}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <Humidity />
          <Text style={styles.textWind}>
            Humidity:{' '}
            {loading ? (
              '- -%'
            ) : (
              <Text style={styles.boldData}>{`${current?.humidity}%`}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Sunrise />
          <Text style={styles.textWind}>
            Sunrise:{' '}
            {loading ? (
              '--:--'
            ) : (
              <Text style={styles.boldData}>{getTime(current?.sunrise)}</Text>
            )}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <Sunset />
          <Text style={styles.textWind}>
            Sunset:{' '}
            {loading ? (
              '--:--'
            ) : (
              <Text style={styles.boldData}>{getTime(current?.sunset)}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Pressure />
          <Text style={styles.textWind}>
            Press.:{' '}
            {loading ? (
              '- -  mb'
            ) : (
              <Text style={styles.boldData}>{`${current?.pressure} mb`}</Text>
            )}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <UV />
          <Text style={styles.textWind}>
            UV:{' '}
            {loading ? (
              '- -'
            ) : (
              <Text style={styles.boldData}> {`${current?.uvi}`}</Text>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  additionalInfoContainer: {
    flex: 1.5,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 20,
  },

  infoBlock: {
    flexDirection: 'row',
    marginTop: 10,
  },

  InfoContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '50%',
  },

  InfoContainerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '50%',
  },

  textWind: {
    fontSize: 17,
    color: '#777575',
    marginLeft: 5,
  },

  boldData: {
    fontWeight: '500',
    color: '#273365',
  },

  moreInfo: {
    fontSize: 20,
    marginBottom: 10,

    fontWeight: 'bold',
    color: '#273365',
  },

  humidity: {
    fontSize: 17,
    color: '#777575',
  },
});

export default AdditionalInfoCard;
