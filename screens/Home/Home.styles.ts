import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
    color: 'white',
  },
  light_background: {
    backgroundColor: '#f5f5f5',
  },
  dark_background: {
    backgroundColor: '#222222',
  },
  light_text: {
    color: '#273365',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  error_text: {
    color:'#eb4d4b',
    fontSize: 18,
    fontWeight: 'bold',
   
  },
});

export default styles;