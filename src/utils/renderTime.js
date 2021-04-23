export const renderTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  const timeObject = {
    hours: `${getHours}`,
    minutes: `${getMinutes}`,
    seconds: `${getSeconds}`,
  };

  return timeObject;
};
