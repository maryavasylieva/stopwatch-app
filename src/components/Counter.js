import { useState } from "react";
import styled from "styled-components";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

const Counter = () => {
  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(0);
  const [subscription, setSubscription] = useState("");
  const [prevent, setPrevent] = useState(false);
  const [timeDifference, setTimeDifference] = useState(0);

  const everySecond$ = interval(1000).pipe(map((val) => val + 1));

  const handleStart = () => {
    const subscribe = everySecond$.subscribe((val) => setTime(val + time));

    setSubscription(subscribe);
    setIsStart(true);
  };

  const handleStop = () => {
    subscription.unsubscribe();
    setTime(0);
  };

  const handleReset = () => {
    if (subscription) {
      subscription.unsubscribe();
    }

    const subscribe = interval(1000).subscribe((val) => setTime(val));
    setSubscription(subscribe);
  };

  const handleWait = () => {
    if (prevent) {
      setPrevent(false);
      const interval = setTimeout(() => {
        setPrevent(true);
        clearInterval(interval);
      }, 300);
    } else {
      if (subscription) {
        subscription.unsubscribe();
      }

      setTimeDifference(time);
    }
  };

  const renderTime = () => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <>
      <TimeContainer>{renderTime()}</TimeContainer>
      <ButtonContainer>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
        <Button onDoubleClick={handleWait}>Wait</Button>
        <Button onClick={handleReset}>Reset</Button>
      </ButtonContainer>
    </>
  );
};

const TimeContainer = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  margin: 0 5px 0 0;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:last-child {
    margin: 0 0 0 0;
  }
`;

export default Counter;
