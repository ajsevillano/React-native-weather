import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  conditions_card: {
    flexDirection: 'row',
    width: '50%',
    paddingVertical: 8,
    alignItems: 'center',
  },

  condition_title: {
    fontSize: 17,
    color: '#777575',
    marginLeft: 5,
  },

  bold: {
    fontWeight: '500',
  },
  //Theme
  light_text: {
    color: '#273365',
  },
  dark_text: {
    color: 'white',
  },
});

export default styles;
