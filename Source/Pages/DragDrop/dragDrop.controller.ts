import {useEffect, useState} from 'react';

export const useDragDropController = () => {
  const ballsArray: string[] = ['A', 'B', 'C', 'D'];

  const [activeBall, setActiveBall] = useState<string>(
    ballsArray[Math.floor(Math.random() * ballsArray.length)],
  );

  type messageType = {
    success: boolean;
    show: boolean;
  };

  const [successStatus, setSuccessStatus] = useState<messageType>({
    success: false,
    show: false,
  });

  const hideMessage = () => {
    setTimeout(() => {
      setSuccessStatus({success: false, show: false});
    }, 1200);
  };

  useEffect(() => {}, [activeBall]);

  let reset = (e: string, reachedThreshold: boolean) => {
    const newBall = ballsArray[Math.floor(Math.random() * ballsArray.length)];
    if (e === activeBall && reachedThreshold) {
      console.log('case 1', e, activeBall);
      setActiveBall(newBall);
      setSuccessStatus({success: true, show: true});
    } else {
      console.log('case 2', e, activeBall);
      setActiveBall(newBall);
      setSuccessStatus({success: false, show: true});
    }

    // console.log('setNew', activeBall);
    hideMessage();
  };

  return {reset, successStatus, ballsArray, activeBall};
};
