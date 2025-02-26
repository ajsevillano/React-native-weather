import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
  },

  imgContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcomeHeader: {
    fontWeight: '700',
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
  },

  welcomeText: {
    color: '#818181',
    paddingHorizontal: 60,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 20,
  },
});

export default styles;
