import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ball: {
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: 'black',
    },
    ballsArray: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pit: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 100,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'grey',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return styles;
};
