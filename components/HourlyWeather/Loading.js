//Libs
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const Loading = ({ theme }) => {
  const themeText = theme === 'light' ? styles.lightText : styles.darkText;
  return (
    <>
      <View style={styles.loadingIndicatorContainer}>
        <Text style={[styles.loadingText, themeText]}>Loading</Text>
        <ActivityIndicator
          size="large"
          color={theme === 'light' ? '#273365' : 'white'}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  lightText: {
    color: '#273365',
  },

  darkText: {
    color: 'white',
  },

  loadingIndicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 33,
  },

  loadingText: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default Loading;
