import { useState } from "react";
import styled from "styled-components";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

import { renderTime } from "../utils/renderTime";

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
      <Wrapper>
        <TimeWrapper>
          <Timer>{renderTime(time).hours}</Timer>
          <TimeLabel>hours</TimeLabel>
        </TimeWrapper>

        <TimeWrapper>
          <Timer>{renderTime(time).minutes}</Timer>
          <TimeLabel>minutes</TimeLabel>
        </TimeWrapper>

        <TimeWrapper>
          <Timer>{renderTime(time).seconds}</Timer>
          <TimeLabel>seconds</TimeLabel>
        </TimeWrapper>
      </Wrapper>
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

// TIMER STYLES
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TimeWrapper = styled.div`
  text-align: center;
  margin-right: 40px;
  margin-left: 40px;
  min-width: 90px;
  position: relative;
  &:not(:last-child):before,
  &:not(:last-child):after {
    content: "";
    background-color: rgba(255, 255, 255, 0.3);
    height: 5px;
    width: 5px;
    border-radius: 50%;
    display: block;
    position: absolute;
    right: -42px;
  }
  &:not(:last-child):before {
    top: 35%;
  }
  &:not(:last-child):after {
    top: 50%;
  }
`;

const Timer = styled.span`
  font-family: "Titillium Web", sans-serif;
  font-size: 50px;
  &:before {
    color: #fff;
    font-size: 4.2rem;
    text-transform: uppercase;
  }
`;

const TimeLabel = styled.p`
  color: rgba(255, 255, 255, 0.35);
  text-transform: uppercase;
  font-family: "Titillium Web", sans-serif;
  font-size: 12px;
  margin-top: 10px;
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
