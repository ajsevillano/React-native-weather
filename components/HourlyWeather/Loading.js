//Libs
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const Loading = ({ theme }) => {
  const screenTheme = {
    light: {
      background: 'light_background',
      text: 'light_text',
    },
    dark: {
      background: 'dark_background',
      text: 'dark_text',
    },
  };

  const getTheme = (component) =>
    theme === 'light'
      ? [screenTheme.light[component]]
      : [screenTheme.dark[component]];
  return (
    <>
      <View style={styles.Container}>
        <Text style={[styles.loadingText, styles[getTheme('text')]]}>
          Loading
        </Text>
        <ActivityIndicator
          size="large"
          color={theme === 'light' ? '#273365' : 'white'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 33,
  },

  loadingText: {
    marginBottom: 10,
    fontWeight: 'bold',
  },

  //Theme
  light_text: {
    color: '#273365',
  },
  dark_text: {
    color: 'white',
  },
});

export default Loading;
