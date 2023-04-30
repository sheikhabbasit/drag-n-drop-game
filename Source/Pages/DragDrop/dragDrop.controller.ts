import {useState} from 'react';

type messageType = {
  success: boolean;
  show: boolean;
  activeBall: string;
};

export const useDragDropController = () => {
  const ballsArray: string[] = ['A', 'B', 'C', 'D'];

  const [successStatus, setSuccessStatus] = useState<messageType>({
    success: false,
    show: false,
    activeBall: ballsArray[Math.floor(Math.random() * ballsArray.length)],
  });

  return {
    successStatus,
    ballsArray,
    setSuccessStatus,
  };
};
