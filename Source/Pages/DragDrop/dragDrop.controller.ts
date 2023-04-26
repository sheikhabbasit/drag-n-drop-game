import {useEffect, useState} from 'react';

export const useDragDropController = () => {
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

  return {reset, successStatus, ballsArray, activeBall};
};
