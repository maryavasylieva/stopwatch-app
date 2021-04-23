import { useState } from "react";
import styled from "styled-components";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

import TimerView from "./TimerView";

const Counter = () => {
  const [time, setTime] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [prevent, setPrevent] = useState(false);
  const [subscription, setSubscription] = useState("");
  const [timeDifference, setTimeDifference] = useState(0);

  const everySecond$ = interval(1000).pipe(map((val) => val + 1));

  const handleStart = () => {
    if (!subscription) {
      const subscribe = everySecond$.subscribe((val) => setTime(val + time));

      setSubscription(subscribe);
      setIsStart(true);
    }
  };

  const handleStop = () => {
    if (subscription) {
      subscription.unsubscribe();
    }

    setTime(0);
    setSubscription("");
    setIsStart(false);
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
      setSubscription("");
    }
  };

  return (
    <Container>
      <TimerView time={time} />

      <ButtonContainer>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop} disabled={!isStart}>
          Stop
        </Button>
        <Button onDoubleClick={handleWait} disabled={!isStart}>
          Wait
        </Button>
        <Button onClick={handleReset} disabled={!isStart}>
          Reset
        </Button>
      </ButtonContainer>
    </Container>
  );
};

// TIMER CONTAINER STYLES
const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #080808;
  border-radius: 5px;
  padding: 34px 54px;
  box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.15),
    0 15px 90px 30px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #eb776e;
  font-family: "Titillium Web", sans-serif;
  border: none;
  color: white;
  margin: 0 5px 0 0;
  padding: 13px 34px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:last-child {
    margin: 0 0 0 0;
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: #f18f88;
  }
`;

export default Counter;
