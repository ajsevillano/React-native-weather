//Libs
import { StyleSheet, Text, View } from 'react-native';
import { getTime } from '../../libs/getTime';
import Card from './Card';

const AdditionalInfo = ({ current, loading, theme }) => {
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
        <Card
          title="Wind"
          theme={theme}
          loading={loading}
          getTheme={getTheme}
          condition={current?.wind_speed}
          unit="m/h"
        />
        <Card
          title="Humidity"
          theme={theme}
          loading={loading}
          getTheme={getTheme}
          condition={current?.humidity}
          unit="%"
        />
        <Card
          title="Sunrise"
          theme={theme}
          loading={loading}
          getTheme={getTheme}
          condition={getTime(current?.sunrise)}
        />
        <Card
          title="Sunset"
          theme={theme}
          loading={loading}
          getTheme={getTheme}
          condition={getTime(current?.sunset)}
        />

        <Card
          title="Press"
          theme={theme}
          loading={loading}
          getTheme={getTheme}
          condition={current?.pressure}
          unit="mb"
        />
        <Card
          title="UV"
          theme={theme}
          loading={loading}
          getTheme={getTheme}
          condition={current?.uvi}
        />
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
