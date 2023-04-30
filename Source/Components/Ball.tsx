import {View, Text, Animated, StyleSheet, PanResponder} from 'react-native';
import React, {useRef} from 'react';
import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

type props = {
  label: string;
  ballsArray: string[];
  successStatus: {success: boolean; show: boolean; activeBall: string};
  setSuccessStatus: (e: {
    success: boolean;
    show: boolean;
    activeBall: string;
  }) => void;
};

const Ball = ({label, successStatus, setSuccessStatus}: props): JSX.Element => {
  const navigation = useNavigation();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        console.log(+pan.y._value, label, successStatus.activeBall);

        if (+pan.y._value > 200 && label === successStatus.activeBall) {
          setSuccessStatus({success: true, show: true, activeBall: ''});
        } else {
          setSuccessStatus({success: false, show: true, activeBall: ''});
        }

        setTimeout(() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'DragDrop'}],
            }),
          );
        }, 1500);
      },
    }),
  ).current;

  return (
    <Animated.View
      style={{
        transform: [{translateX: pan.x}, {translateY: pan.y}],
      }}>
      <View style={styles.ball} {...panResponder.panHandlers}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </Animated.View>
  );
};

export default Ball;

const styles = StyleSheet.create({
  ball: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    color: 'grey',
    flex: 1,
  },
});
