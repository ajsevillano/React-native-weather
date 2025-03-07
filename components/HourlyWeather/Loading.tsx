//Libs
import { Text, View, ActivityIndicator } from 'react-native';

// Styles
import styles from './Loading.styles';

const Loading = ({ theme }) => {
  return (
    <>
      <View style={styles.Container}>
        <Text style={[styles.loadingText, { color: theme.text }]}>Loading</Text>
        <ActivityIndicator size='large' color={theme === 'light' ? '#273365' : 'white'} />
      </View>
    </>
  );
};

export default Loading;
