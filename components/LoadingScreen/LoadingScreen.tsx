import { View, Text, ActivityIndicator } from 'react-native';
import ThemeContext from '../../context/theme';
import getLoadingScreenStyles from './LoadingScreen.styles';
import { useContext } from 'react';

const LoadingScreen = () => {
  const { theme } = useContext(ThemeContext);
  const styles = getLoadingScreenStyles(theme);
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={theme.loadingIndicator} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default LoadingScreen;
