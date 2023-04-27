import {View, Text, Animated, StyleSheet, PanResponder} from 'react-native';
import React, {useEffect, useRef} from 'react';

type props = {
  label: string;
  reset: (e: string, reachedThreshold: boolean) => void;
  activeBall: string;
};

const Ball = ({label, reset, activeBall}: props): JSX.Element => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        if (+pan.y._value > 200) {
          reset(label, true);
        } else {
          reset(label, false);
        }
      },
    }),
  ).current;

  useEffect(() => {}, [activeBall]);

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
