//Libs
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
// Styles
import styles from './Button.styles';

const Button = ({ handleOnPress, loading, buttonText }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleOnPress} activeOpacity={0.7}>
      {loading && (
        <>
          <ActivityIndicator
            style={styles.activityIndicator}
            size='small'
            color='#273365'
          />
          <Text style={styles.buttonText}>Loading</Text>
        </>
      )}
      {!loading && <Text style={styles.buttonText}>{buttonText}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
