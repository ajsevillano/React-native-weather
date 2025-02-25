//Libs
import { Text, View } from 'react-native';
import getTheme from '../../libs/getTheme';

//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';

//Components
import Card from './Card';

// Styles
import styles from './AdditionalInfo.styles';

const AdditionalInfo = ({ InfoObject, loading }) => {
  const { wind, humidity, sunrise, sunset, pressure, uv } = InfoObject || {};
  //Theme from Context
  const theme = useContext(ThemeContext);
  const conditionObject = [
    { Wind: { id: 1, value: wind, unit: 'km/h' } },
    { Humidity: { id: 2, value: humidity, unit: '%' } },
    { Sunrise: { id: 3, value: sunrise } },
    { Sunset: { id: 4, value: sunset } },
    { Press: { id: 5, value: pressure, unit: 'Mb' } },
    { UV: { id: 6, value: uv } },
  ];

  /* Mapping through the array of objects and returning a card component for each object. */
  const cardData = conditionObject?.map(element => {
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

export default AdditionalInfo;
