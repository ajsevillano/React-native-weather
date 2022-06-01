//Libs
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const Button = ({ handleOnPress, loading, buttonText }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleOnPress}
      activeOpacity={0.7}
    >
      {loading && (
        <>
          <ActivityIndicator
            style={styles.activityIndicator}
            size="small"
            color="#273365"
          />
          <Text style={styles.buttonText}>Loading</Text>
        </>
      )}
      {!loading && <Text style={styles.buttonText}>{buttonText}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: '#ffbf00',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 70,
    alignItems: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: '#273365',
    fontSize: 25,
    fontWeight: '700',
  },

  activityIndicator: {
    marginRight: 10,
  },
});

export default Button;
