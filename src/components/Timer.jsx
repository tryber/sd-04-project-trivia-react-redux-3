import React, { useEffect } from 'react';

export default function Timer({ stateProps :{ setIdInterval, setTimer, timer, idQuestion, idInterval } }) {
  useEffect(() => {
    if(idInterval === null) {
    const interval = setInterval(() => {
      setTimer(seconds => seconds - 1);
    }, 1000);
    setIdInterval(interval);
    }
  }, [idQuestion]);

  return (
    <div>
      {timer}
    </div>
  );
}
