//Libs
import { StyleSheet, Text, View } from 'react-native';
import { getTime } from '../../libs/getTime';

//SVG Icons
import Pressure from '../Svgs/Pressure';
import Humidity from '../Svgs/Humidity';
import UV from '../Svgs/UV';
import Windy from '../Svgs/Windy';
import Sunrise from '../Svgs/Sunrise';
import Sunset from '../Svgs/Sunset';

const AdditionalInfoCard = ({ current, loading, theme }) => {
  const themeMoreInfoContainer =
    theme === 'light' ? styles.lightContainer : styles.darkContainer;
  const themeMoreInfoText =
    theme === 'light' ? styles.lightText : styles.darkText;
  return (
    <View style={[styles.additionalInfoContainer, themeMoreInfoContainer]}>
      <Text style={[styles.moreInfo, themeMoreInfoText]}>Additional info</Text>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Windy theme={theme} />
          <Text style={styles.textWind}>
            Wind:{' '}
            {loading ? (
              '- - m/h'
            ) : (
              <Text
                style={[styles.boldData, themeMoreInfoText]}
              >{`${current?.wind_speed}m/h`}</Text>
            )}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <Humidity theme={theme} />
          <Text style={styles.textWind}>
            Humidity:{' '}
            {loading ? (
              '- -%'
            ) : (
              <Text
                style={[styles.boldData, themeMoreInfoText]}
              >{`${current?.humidity}%`}</Text>
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
              <Text style={[styles.boldData, themeMoreInfoText]}>
                {getTime(current?.sunrise)}
              </Text>
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
              <Text style={[styles.boldData, themeMoreInfoText]}>
                {getTime(current?.sunset)}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.infoBlock}>
        <View style={styles.InfoContainerLeft}>
          <Pressure theme={theme} />
          <Text style={styles.textWind}>
            Press.:{' '}
            {loading ? (
              '- -  mb'
            ) : (
              <Text
                style={[styles.boldData, themeMoreInfoText]}
              >{`${current?.pressure} mb`}</Text>
            )}
          </Text>
        </View>
        <View style={styles.InfoContainerRight}>
          <UV theme={theme} />
          <Text style={styles.textWind}>
            UV:{' '}
            {loading ? (
              '- -'
            ) : (
              <Text style={[styles.boldData, themeMoreInfoText]}>
                {' '}
                {`${current?.uvi}`}
              </Text>
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

    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 20,
  },

  lightContainer: {
    backgroundColor: 'white',
  },

  darkContainer: {
    backgroundColor: '#1b1b1b',
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
  },

  moreInfo: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  lightText: {
    color: '#273365',
  },

  darkText: {
    color: 'white',
  },

  humidity: {
    fontSize: 17,
    color: '#777575',
  },
});

export default AdditionalInfoCard;
