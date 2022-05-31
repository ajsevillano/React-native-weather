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
  const screenTheme = {
    light: {
      background: styles.light_background,
      text: styles.light_text,
    },
    dark: {
      background: styles.dark_background,
      text: styles.dark_text,
    },
  };

  const getTheme = (component) =>
    theme === 'light'
      ? screenTheme.light[component]
      : screenTheme.dark[component];

  return (
    <View style={[styles.container, getTheme('background')]}>
      <Text style={[styles.header, getTheme('text')]}>Additional info</Text>
      <View style={styles.conditions_container}>
        <View style={styles.conditions_left_block}>
          <Windy theme={theme} />
          <Text style={styles.condition_title}>
            Wind:{' '}
            {loading ? (
              '- - m/h'
            ) : (
              <Text
                style={[styles.bold, getTheme('text')]}
              >{`${current?.wind_speed}m/h`}</Text>
            )}
          </Text>
        </View>
        <View style={styles.conditions_right_block}>
          <Humidity theme={theme} />
          <Text style={styles.condition_title}>
            Humidity:{' '}
            {loading ? (
              '- -%'
            ) : (
              <Text
                style={[styles.bold, getTheme('text')]}
              >{`${current?.humidity}%`}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.conditions_container}>
        <View style={styles.conditions_left_block}>
          <Sunrise />
          <Text style={styles.condition_title}>
            Sunrise:{' '}
            {loading ? (
              '--:--'
            ) : (
              <Text style={[styles.bold, getTheme('text')]}>
                {getTime(current?.sunrise)}
              </Text>
            )}
          </Text>
        </View>
        <View style={styles.conditions_right_block}>
          <Sunset />
          <Text style={styles.condition_title}>
            Sunset:{' '}
            {loading ? (
              '--:--'
            ) : (
              <Text style={[styles.bold, getTheme('text')]}>
                {getTime(current?.sunset)}
              </Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.conditions_container}>
        <View style={styles.conditions_left_block}>
          <Pressure theme={theme} />
          <Text style={styles.condition_title}>
            Press.:{' '}
            {loading ? (
              '- -  mb'
            ) : (
              <Text
                style={[styles.bold, getTheme('text')]}
              >{`${current?.pressure} mb`}</Text>
            )}
          </Text>
        </View>
        <View style={styles.conditions_right_block}>
          <UV theme={theme} />
          <Text style={styles.condition_title}>
            UV:
            {loading ? (
              '- -'
            ) : (
              <Text style={[styles.bold, getTheme('text')]}>
                {` ${current?.uvi}`}
              </Text>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'column',

    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 20,
  },

  header: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  // Info blocks

  conditions_container: {
    flexDirection: 'row',
    marginTop: 10,
  },

  condition_title: {
    fontSize: 17,
    color: '#777575',
    marginLeft: 5,
  },

  conditions_left_block: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '50%',
  },

  conditions_right_block: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: '50%',
  },

  bold: {
    fontWeight: '500',
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

export default AdditionalInfoCard;
