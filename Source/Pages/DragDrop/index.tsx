import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Ball from '../../Components/Ball';
import LottieView from 'lottie-react-native';
import {useDragDropController} from './dragDrop.controller';
import {useStyles} from './useStyles';

const DragDrop = (): JSX.Element => {
  const {successStatus, ballsArray, setSuccessStatus} = useDragDropController();
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.screen}>
      {successStatus.success && successStatus.show && (
        <LottieView
          source={require('../../Assets/LottieAnimations/success.json')}
          autoPlay
        />
      )}
      {!successStatus.success && successStatus.show && (
        <LottieView
          source={require('../../Assets/LottieAnimations/failed.json')}
          autoPlay
        />
      )}
      <View style={styles.ballsArray}>
        {ballsArray.map((ball, index) => {
          return (
            <Ball
              label={ball}
              ballsArray={ballsArray}
              key={index}
              successStatus={successStatus}
              setSuccessStatus={setSuccessStatus}
            />
          );
        })}
      </View>
      <View style={styles.pit}>
        <Text style={styles.text}>{successStatus.activeBall}</Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(DragDrop);
