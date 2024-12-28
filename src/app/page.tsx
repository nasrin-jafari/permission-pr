'use client';

import React from 'react';
import useIranTime from '@/hooks/useIranTime';
import useGreeting from '@/hooks/useGreeting';

const Dashboard: React.FC = () => {
  const currentTime = useIranTime();
  const time = currentTime.toLocaleTimeString('fa-IR');
  const greeting = useGreeting(currentTime.getHours());

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold">{time}</h1>
      <h2 className="text-2xl">{greeting}</h2>
    </div>
  );
};

export default Dashboard;
