import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Ball from '../../Components/Ball';
import LottieView from 'lottie-react-native';
import {useDragDropController} from './dragDrop.controller';

const DragDrop = (): JSX.Element => {
  const {reset, successStatus, ballsArray, activeBall} =
    useDragDropController();

  return (
    <SafeAreaView style={styles.screen}>
      {successStatus.success && successStatus.show && (
        <LottieView
          source={require('../Assets/LottieAnimations/success.json')}
          autoPlay
        />
      )}
      {!successStatus.success && successStatus.show && (
        <LottieView
          source={require('../Assets/LottieAnimations/failed.json')}
          autoPlay
        />
      )}
      <View style={styles.ballsArray}>
        {ballsArray.map((ball, index) => {
          return <Ball label={ball} key={index} reset={reset} />;
        })}
      </View>
      <View style={styles.pit}>
        <Text style={styles.text}>{activeBall}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DragDrop;

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
    zIndex: 1,
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
    // color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
