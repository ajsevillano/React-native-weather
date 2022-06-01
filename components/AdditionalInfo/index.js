//Libs
import { StyleSheet, Text, View } from 'react-native';
import { getTime } from '../../libs/getTime';
import getTheme from '../../libs/getTheme';

//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';

//Components
import Card from './Card';

const AdditionalInfo = ({ current, loading }) => {
  //Theme from Context
  const theme = useContext(ThemeContext);
  const conditionObject = [
    { Wind: { id: 1, value: current?.wind_speed, unit: 'm/h' } },
    { Humidity: { id: 2, value: current?.humidity, unit: '%' } },
    { Sunrise: { id: 3, value: getTime(current?.sunrise) } },
    { Sunset: { id: 4, value: getTime(current?.sunset) } },
    { Press: { id: 5, value: current?.pressure, unit: 'Mb' } },
    { UV: { id: 6, value: current?.uvi } },
  ];

  /* Mapping through the array of objects and returning a card component for each object. */
  const cardData = conditionObject?.map((element) => {
    const condition = Object.keys(element);
    const { id, value, unit } = element[condition];

    return (
      <Card
        key={id}
        title={condition}
        theme={theme}
        loading={loading}
        getTheme={getTheme}
        condition={value}
        unit={unit}
      />
    );
  });

  return (
    <View style={[styles.container, styles[getTheme('background', theme)]]}>
      <Text style={[styles.header, styles[getTheme('text', theme)]]}>
        Additional info
      </Text>
      <View style={styles.conditions_container}>{cardData}</View>
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
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  header: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  // Info blocks
  conditions_container: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
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

export default AdditionalInfo;
