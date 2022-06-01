//Libs
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import getTheme from '../../libs/getTheme';

//Context

import { useContext } from 'react';
import ThemeContext from '../../context/theme';

const Loading = () => {
  //Theme from Context
  const theme = useContext(ThemeContext);
  return (
    <>
      <View style={styles.Container}>
        <Text style={[styles.loadingText, styles[getTheme('text', theme)]]}>
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
