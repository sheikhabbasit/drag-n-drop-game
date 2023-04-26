import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Ball from '../Components/Ball';
import LottieView from 'lottie-react-native';

const DragDrop = (): JSX.Element => {
  const [ballsArray] = useState<string[]>(['A', 'B', 'C', 'D']);

  const [activeBall, setActiveBall] = useState<string>(
    ballsArray[Math.floor(Math.random() * 4)],
  );

  type messageType = {
    success: boolean;
    show: boolean;
  };

  const [successStatus, setSuccessStatus] = useState<messageType>({
    success: false,
    show: false,
  });

  useEffect(() => {}, [ballsArray]);

  const reset = (e: string, reachedThreshold: boolean) => {
    if (e === activeBall && reachedThreshold) {
      setSuccessStatus({success: true, show: true});
    } else {
      setSuccessStatus({success: false, show: true});
    }
    setActiveBall(ballsArray[Math.floor(Math.random() * 4)]);

    setTimeout(() => {
      setSuccessStatus({success: false, show: false});
    }, 900);
  };

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
