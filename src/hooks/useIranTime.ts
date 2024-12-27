import { useState, useEffect } from 'react';

const getIranTime = () => {
  const date = new Date();
  const iranTime = new Date(
    date.toLocaleString('en-US', { timeZone: 'Asia/Tehran' })
  );
  return iranTime;
};

const useIranTime = () => {
  const [currentTime, setCurrentTime] = useState(getIranTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getIranTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

export default useIranTime;
