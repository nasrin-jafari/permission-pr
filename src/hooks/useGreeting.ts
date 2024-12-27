const useGreeting = (hours: number) => {
  const greetings = {
    morning: 'سلام، صبح بخیر',
    afternoon: 'سلام، بعد از ظهر بخیر',
    evening: 'سلام، عصر بخیر',
  };

  const user = localStorage.getItem('user');
  const parsedUser = user ? JSON.parse(user) : null;

  const getGreetingMessage = () => {
    const username = parsedUser?.username || 'کاربر عزیز';

    if (hours < 12) {
      return `${greetings.morning} ${username}`;
    } else if (hours < 18) {
      return `${greetings.afternoon} ${username}`;
    } else {
      return `${greetings.evening} ${username}`;
    }
  };

  return getGreetingMessage();
};

export default useGreeting;
