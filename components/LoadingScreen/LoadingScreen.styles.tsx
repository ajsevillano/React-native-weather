import { StyleSheet } from 'react-native';

export const getLoadingScreenStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background.secondary,
    },
    text: {
      marginTop: 10,
      fontSize: 16,
      color: theme.text,
    },
  });

export default getLoadingScreenStyles;
