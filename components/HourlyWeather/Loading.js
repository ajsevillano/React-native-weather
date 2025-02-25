//Libs
import { Text, View, ActivityIndicator } from 'react-native';

//Context
import { useContext } from 'react';
import ThemeContext from '../../context/theme';

// Styles
import styles from './Loading.styles';

const Loading = () => {
  //Theme from Context
  const theme = useContext(ThemeContext);
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
